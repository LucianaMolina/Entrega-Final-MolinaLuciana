-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1:3306
-- Tiempo de generación: 20-06-2023 a las 14:11:46
-- Versión del servidor: 8.0.31
-- Versión de PHP: 8.0.26

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `proyecto`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `novedades`
--

DROP TABLE IF EXISTS `novedades`;
CREATE TABLE IF NOT EXISTS `novedades` (
  `id` int NOT NULL AUTO_INCREMENT,
  `especie` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `nombre` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `edad` int NOT NULL,
  `raza` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `estado` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `tamano` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `img_id` varchar(250) COLLATE utf8mb4_general_ci DEFAULT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=16 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `novedades`
--

INSERT INTO `novedades` (`id`, `especie`, `nombre`, `edad`, `raza`, `estado`, `tamano`, `img_id`) VALUES
(7, 'chancho', 'Betty', 2, 'mestizo', 'sin esterilizar', 'mediano', 'redcqdger6usxqn3ykkh'),
(6, 'caballo', 'Horacio', 7, 'mestizo', 'sin esterilizar', 'grande', 'gx76hne3go8fsmmai7ob'),
(8, 'canino', 'Morgan', 5, 'mestizo', 'esterilizado', 'mediano', 'x9apvqfcolpkplpndyv8'),
(9, 'felino', 'Pepona', 4, 'mestizo', 'esterilizado', 'chico', 'bibo9gz1obyxcdx5ea3i'),
(10, 'canino', 'carucha', 6, 'mestizo', 'esterilizado', 'grande', 'jzft7bwrcyqtb788smks'),
(11, 'canino', 'Demo', 6, 'mestizo', 'esterilizado', 'mediano', 'veyvw6dxvzrfzjalw85a'),
(12, 'canino', 'Maria', 8, 'mestizo', 'esterilizado', 'mediano', 'frkcw1jspft9xfndd4vp'),
(13, 'canino', 'Pamela', 11, 'labrador', 'esterilizado', 'grande', 'o6dsrbpg8o22lpecc83z');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuarios`
--

DROP TABLE IF EXISTS `usuarios`;
CREATE TABLE IF NOT EXISTS `usuarios` (
  `id` int NOT NULL AUTO_INCREMENT,
  `usuario` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  `password` varchar(50) COLLATE utf8mb4_general_ci NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=MyISAM AUTO_INCREMENT=2 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Volcado de datos para la tabla `usuarios`
--

INSERT INTO `usuarios` (`id`, `usuario`, `password`) VALUES
(1, 'flavia', '81dc9bdb52d04dc20036dbd8313ed055');
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
