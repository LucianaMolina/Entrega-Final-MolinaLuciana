var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contacto', { title: 'Express' });
});

router.post('/', async (req, res, next) =>{
 console.log(req.body) 
 var nombre = req.body.nombre;
 var apellido = req.body.apellido;
 var email = req.body.email;
 var adoptar = req.body.adop;
 var mensaje = req.body.mensaje;
 
 var obj = {
   to: 'lucianamolina385@gmail.com',
   subject: 'contacto desde la web',
   html: nombre + " " + apellido +  "se contacto a traves de " + email + " y quiere mas informacion sobre  " + adoptar + ", envio el siguiente mensaje: " + mensaje
  }

  var transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST,
    port: process.env.SMTP_PORT,
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    }
  })
  var info = await transporter.sendMail(obj);

  res.render('contacto',{
    message: 'mendaje enviado correctamente',
  });
});


module.exports = router;