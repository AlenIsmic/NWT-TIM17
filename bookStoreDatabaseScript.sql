-- phpMyAdmin SQL Dump
-- version 4.1.14
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 06, 2015 at 10:29 PM
-- Server version: 5.6.17
-- PHP Version: 5.5.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `book_store`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_author`
--

CREATE TABLE IF NOT EXISTS `tbl_author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `biography` varchar(50) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_id` (`id`),
  UNIQUE KEY `email_UNIQUE` (`biography`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

--
-- Dumping data for table `tbl_author`
--

INSERT INTO `tbl_author` (`id`, `name`, `biography`) VALUES
(1, 'Agatha Christie', 'She is famous crimi writer.');

-- --------------------------------------------------------

--
-- Table structure for table `tbl_book`
--

CREATE TABLE IF NOT EXISTS `tbl_book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `title` varchar(50) NOT NULL,
  `genre` varchar(50) DEFAULT NULL,
  `cover` varchar(100) DEFAULT NULL,
  `summary` text,
  `price` double NOT NULL,
  `available` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_id` (`id`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=6 ;

--
-- Dumping data for table `tbl_book`
--

INSERT INTO `tbl_book` (`id`, `title`, `genre`, `cover`, `summary`, `price`, `available`) VALUES
(1, '', NULL, 'Book', 'Book is great!', 9.99, NULL),
(2, '', NULL, '', '', 0, NULL),
(3, '', NULL, 'cover', 'summary', 9.98, NULL),
(4, '', NULL, 'cover', 'summary', 9.98, NULL),
(5, '', NULL, 'cover', 'summary', 9.98, NULL);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_book_author`
--

CREATE TABLE IF NOT EXISTS `tbl_book_author` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `author` int(11) NOT NULL,
  `book` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_id` (`id`),
  KEY `author_idx` (`author`),
  KEY `book` (`book`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_order`
--

CREATE TABLE IF NOT EXISTS `tbl_order` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `date` datetime NOT NULL,
  `user` int(11) NOT NULL,
  `price` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `email_UNIQUE` (`user`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=2 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_review`
--

CREATE TABLE IF NOT EXISTS `tbl_review` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `content` varchar(150) NOT NULL,
  `user` int(11) NOT NULL,
  `rate` int(11) DEFAULT NULL,
  `type` varchar(45) NOT NULL,
  `reference` int(11) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_id` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user`
--

CREATE TABLE IF NOT EXISTS `tbl_user` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `admin` int(11) DEFAULT NULL,
  `isVerified` tinyint(1) NOT NULL,
  `password` varchar(30) NOT NULL,
  `isUserBanned` tinyint(1) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_id` (`id`),
  UNIQUE KEY `email_UNIQUE` (`email`)
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=3 ;

--
-- Dumping data for table `tbl_user`
--

INSERT INTO `tbl_user` (`id`, `name`, `email`, `admin`, `isVerified`, `password`, `isUserBanned`) VALUES
(1, 'ime', 'mail', NULL, 0, 'psw', 0),
(2, '', '', NULL, 0, '', 1);

-- --------------------------------------------------------

--
-- Table structure for table `tbl_user_book`
--

CREATE TABLE IF NOT EXISTS `tbl_user_book` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `user` int(11) NOT NULL,
  `book` int(11) NOT NULL,
  `state` varchar(50) NOT NULL,
  `order` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `unique_id` (`id`),
  KEY `order_idx` (`order`),
  KEY `user2` (`user`),
  KEY `book2` (`book`)
) ENGINE=InnoDB DEFAULT CHARSET=latin1 AUTO_INCREMENT=1 ;

--
-- Constraints for dumped tables
--

--
-- Constraints for table `tbl_book_author`
--
ALTER TABLE `tbl_book_author`
  ADD CONSTRAINT `author` FOREIGN KEY (`author`) REFERENCES `tbl_author` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `book` FOREIGN KEY (`book`) REFERENCES `tbl_book` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tbl_order`
--
ALTER TABLE `tbl_order`
  ADD CONSTRAINT `user` FOREIGN KEY (`user`) REFERENCES `tbl_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

--
-- Constraints for table `tbl_user_book`
--
ALTER TABLE `tbl_user_book`
  ADD CONSTRAINT `user2` FOREIGN KEY (`user`) REFERENCES `tbl_user` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `book2` FOREIGN KEY (`book`) REFERENCES `tbl_book` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION,
  ADD CONSTRAINT `order` FOREIGN KEY (`order`) REFERENCES `tbl_order` (`id`) ON DELETE NO ACTION ON UPDATE NO ACTION;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
