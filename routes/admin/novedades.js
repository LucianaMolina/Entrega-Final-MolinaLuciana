var express = require('express');
var router = express.Router();
var novedadesMoldel = require('../../models/novedadesModel');
var util = require('util');
var cloudinary = require('cloudinary').v2;
const uploader = util.promisify(cloudinary.uploader.upload);
const destroy = util.promisify(cloudinary.uploader.destroy);

router.get('/', async function (req, res, next) {
    var novedades = await novedadesMoldel.getNovedades();
    novedades = novedades.map(novedad => {
        if (novedad.img_id) {
            const imagen = cloudinary.image(novedad.img_id, {
                width: 50,
                height: 50,
                crop: 'fill'
            });
            return {
                ...novedad,
                imagen
            }
        } else {
            return{
                ...novedad,
                imagen: ''
            }
        }
    });
    res.render('admin/novedades', {
        layout: 'admin/layout',
        persona: req.session.nombre,
        novedades
    });
});




router.get('/eliminar/:id', async (req, res, next) => {
    var id = req.params.id;
    await novedadesMoldel.deleteNovedadById(id);
    res.redirect('/admin/novedades')
});

router.get('/agregar', (req, res, next) => {
    res.render('admin/agregar', {
        layout: 'admin/layout'
    })
});

router.post('/agregar', async (req, res, next) => {
    try {

        var img_id = '';
        if (req.files && Object.keys(req.files).length > 0) {
            imagen = req.files.imagen;
            img_id = (await uploader(imagen.tempFilePath)).public_id;
        }

        if (req.body.especie != "" && req.body.nombre != "" && req.body.edad != "" && req.body.raza != "" && req.body.estado != "" && req.body.tamano != "") {
            await novedadesMoldel.insertNovedad({
                ...req.body,
                img_id
            });
            res.redirect('/admin/novedades')
        } else {
            res.render('admin/agregar', {
                layout: 'admin/layout',
                error: true, message: 'todos los campos son requeridos'
            })
        }
    } catch (error) {
        console.log(error)
        res.render('admin/agregar', {
            layout: 'admin/layout',
            error: true, message: 'no se cargo la novedad'
        });
    }
});





router.get('/modificar/:id', async (req, res, next) => {
    let id = req.params.id;
    let novedad = await novedadesMoldel.getNovedadById(id);
    res.render('admin/modificar', {
        layout: 'admin/layout',
        novedad
    })
});

router.post('/modificar', async (req, res, next) => {
    try {
        let img_id = req.body.img_original;
        let borrar_img_vieja = false;
        if (req.body.img_delete === "1") {
            img_id = null;
            borrar_img_vieja = true;
        } else {
            if (req.files && Object.keys(req.files).length > 0) {
                imagen = req.files.imagen;
                img_id = (await
                uploader(imagen.tempFilePath)).public_id;
                borrar_img_vieja = true;
            }
        }
        if (borrar_img_vieja && req.body.img_original){
            await (destroy(req.body.img_original));
        }

        var obj = {
            especie: req.body.especie,
            nombre: req.body.nombre,
            edad: req.body.edad,
            raza: req.body.raza,
            estado: req.body.estado,
            tamano: req.body.tamano,
            img_id
        }
        await novedadesMoldel.modificarNovedadesById(obj, req.body.id);
        res.redirect('/admin/novedades');
    } catch (error) {
        console.log(error)
        res.render('admin/modificar', {
            layout: 'admin/layout',
            error: true, message: 'no se modifico la novedad'
        })
    }
})





module.exports = router;