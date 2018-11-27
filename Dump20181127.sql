CREATE DATABASE  IF NOT EXISTS `pole2fitness` /*!40100 DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_0900_ai_ci */;
USE `pole2fitness`;
-- MySQL dump 10.13  Distrib 8.0.13, for Win64 (x86_64)
--
-- Host: localhost    Database: pole2fitness
-- ------------------------------------------------------
-- Server version	8.0.13

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
 SET NAMES utf8 ;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `bookings`
--

DROP TABLE IF EXISTS `bookings`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `bookings` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class_id` int(11) DEFAULT NULL,
  `schedule_id` int(11) DEFAULT NULL,
  `name` varchar(450) DEFAULT NULL,
  `email` varchar(450) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=128 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `bookings`
--

LOCK TABLES `bookings` WRITE;
/*!40000 ALTER TABLE `bookings` DISABLE KEYS */;
INSERT INTO `bookings` VALUES (104,1,1,'alex','a@c.x'),(105,1,2,'alex','a@c.x'),(106,1,3,'alex','a@c.x'),(107,1,4,'alex','a@c.x'),(108,1,402,'Alex Thomas','Graft0@live.com'),(109,1,403,'Alex Thomas','Graft0@live.com'),(110,1,404,'Alex Thomas','Graft0@live.com'),(111,1,405,'Alex Thomas','Graft0@live.com'),(112,1,406,'Alex Thomas','Graft0@live.com'),(113,2,407,'Alex Thomas','Graft0@live.com'),(114,2,408,'Alex Thomas','Graft0@live.com'),(115,2,409,'Alex Thomas','Graft0@live.com'),(116,2,410,'Alex Thomas','Graft0@live.com'),(117,2,411,'Alex Thomas','Graft0@live.com'),(118,3,412,'Alex Thomas','Graft0@live.com'),(119,3,413,'Alex Thomas','Graft0@live.com'),(120,3,414,'Alex Thomas','Graft0@live.com'),(121,3,415,'Alex Thomas','Graft0@live.com'),(122,3,416,'Alex Thomas','Graft0@live.com'),(123,3,412,'Alex Thomas','Graft0@live.com'),(124,3,413,'Alex Thomas','Graft0@live.com'),(125,3,414,'Alex Thomas','Graft0@live.com'),(126,3,415,'Alex Thomas','Graft0@live.com'),(127,3,416,'Alex Thomas','Graft0@live.com');
/*!40000 ALTER TABLE `bookings` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `classes`
--

DROP TABLE IF EXISTS `classes`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `classes` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(450) DEFAULT NULL,
  `day` varchar(45) DEFAULT NULL,
  `time` varchar(45) DEFAULT NULL,
  `description` varchar(4500) DEFAULT NULL,
  `difficulty` int(11) DEFAULT NULL,
  `active` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=7 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `classes`
--

LOCK TABLES `classes` WRITE;
/*!40000 ALTER TABLE `classes` DISABLE KEYS */;
INSERT INTO `classes` VALUES (1,'Inverts & Tricks','Monday','18:00','This class is going to be inverst and tricks and will be fairly difficult for a beginner, but if you are confident enough then feel free to book.',3,1),(2,'Beginners','Monday','19:05','This class is for beginners and will focus aorund easier moves and key principles and techniques.',1,1),(3,'Heels','Tuesday','19:00','This class is an overall class that incorporates heels.',2,1),(4,'Beginners','Wednesday','18:30','This class is for beginners and will focus aorund easier moves and key principles and techniques.',1,1),(5,'Beginners','Wednesday','18:00','This class is for beginners and will focus aorund easier moves and key principles and techniques.',1,NULL),(6,'Mixed Ability','Thursday','19:00','This class is for people of all abilities whether you are new or experienced.',2,1);
/*!40000 ALTER TABLE `classes` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `comments`
--

DROP TABLE IF EXISTS `comments`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `comments` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `post_id` int(11) DEFAULT NULL,
  `name` varchar(45) DEFAULT NULL,
  `comment` varchar(4500) DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=48 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comments`
--

LOCK TABLES `comments` WRITE;
/*!40000 ALTER TABLE `comments` DISABLE KEYS */;
INSERT INTO `comments` VALUES (1,1,'a','fsdf','2018-11-25 12:25:56'),(2,2,'b','uur','2018-11-25 12:25:56'),(3,3,'c','5345','2018-11-25 12:25:56'),(4,4,'c','kjh','2018-11-25 12:25:56'),(5,5,'d','ad','2018-11-25 12:25:56'),(6,4,'sdf','uiytdrs','2018-11-25 12:25:56'),(7,5,'tr','7686543','2018-11-25 12:25:56'),(8,4,'af','78td','2018-11-25 12:25:56'),(9,5,'sdf','tyucg','2018-11-25 12:25:56'),(10,5,'sdf',',6urj','2018-11-25 12:25:56'),(11,5,'tr','df','2018-11-25 12:25:56'),(40,1,'Alex Thomas','fsdfsdfsdf','2018-11-25 13:13:12'),(41,1,'Alex Thomas','comment','2018-11-25 13:13:36'),(42,1,'Alex Thomas','Replys','2018-11-25 13:22:22'),(43,1,'Alex Thomas','Reply`s','2018-11-25 13:22:41'),(44,1,'Alex Thomas','Reply`s','2018-11-25 13:23:14'),(45,1,'Alex Thomas','Reply`s','2018-11-25 13:23:26'),(46,1,'Alex Thomas','I think that`s a great idea lee','2018-11-25 13:24:40'),(47,1,'Alex Thomas','Something`s','2018-11-26 11:59:28');
/*!40000 ALTER TABLE `comments` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `messages`
--

DROP TABLE IF EXISTS `messages`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `messages` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `email` varchar(45) DEFAULT NULL,
  `message` varchar(4500) DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `opened` int(11) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=23 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `messages`
--

LOCK TABLES `messages` WRITE;
/*!40000 ALTER TABLE `messages` DISABLE KEYS */;
INSERT INTO `messages` VALUES (3,'Alex Thomas','Graft0@live.com','fsdfsdfsd','2018-11-23 13:59:10',1),(4,'Alex Thomas','Graft0@live.com','fsdfsd','2018-11-23 14:00:25',1),(5,'Alex the King','Graft0@live.com','Here is a super long message for me to praciste yping on this ekyoad because I know that ot all of the keys work as well as they shoudl but thats okay because I am hitting them very hard','2018-11-23 14:21:28',1),(6,'Alex Thomas','graft0@live.com','gthga\nfsd','2018-11-23 14:55:35',1),(7,'Alex','Graft@live.cmo','some message','2018-11-23 14:59:48',1),(8,'Alex Thomas','Graft0@live.com','Hey Lee I can\'t make tonight\'s class can\'t I swap','2018-11-23 15:30:04',1),(9,'Alex Thomas','Graft0@live.com','Hey Lee I can\'t make tonight\'s class can I swap my class to tomorrow\'s class please? Thanks x','2018-11-23 15:39:25',1),(10,'Lee','pole2fitness@hotmail.co.uk','Graft0@live.com','2018-11-23 15:44:32',NULL),(11,'Lee','pole2fitness@hotmail.co.uk','Graft0@live.com','2018-11-23 15:54:59',NULL),(12,'Lee','pole2fitness@hotmail.co.uk','Graft0@live.com','2018-11-23 15:56:16',NULL),(13,'Lee','pole2fitness@hotmail.co.uk','Graft0@live.com','2018-11-23 16:00:26',NULL),(14,'Lee','pole2fitness@hotmail.co.uk','Yes that\'s not a problem I will switch you over to tomorrow\'s class','2018-11-23 16:00:54',NULL),(15,'Lee','pole2fitness@hotmail.co.uk','Yes that\'s not a problem I will switch you over to tomorrow\'s class','2018-11-23 16:02:49',NULL),(16,'Lee','pole2fitness@hotmail.co.uk','Yes that\'s not a problem I will switch you over to tomorrow\'s class','2018-11-23 16:05:34',NULL),(17,'Lee','pole2fitness@hotmail.co.uk','Yes that\'s not a problem I will switch you over to tomorrow\'s class','2018-11-23 16:11:15',NULL),(18,'Alex','Graft0@live.com','fsdfsdfsdfsdfsdsdfsdfsdf\nfsdfsd\nfsdfsd','2018-11-24 12:51:51',1),(19,'Lee','pole2fitness@hotmail.co.uk','Thanks too','2018-11-24 13:50:59',NULL),(20,'Lee','pole2fitness@hotmail.co.uk','Thanks too','2018-11-24 13:51:00',NULL),(21,'Lee','pole2fitness@hotmail.co.uk','Thanks too','2018-11-24 13:51:01',NULL),(22,'Lee','pole2fitness@hotmail.co.uk','Thanks too','2018-11-24 13:51:03',NULL);
/*!40000 ALTER TABLE `messages` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `posts`
--

DROP TABLE IF EXISTS `posts`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `posts` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `name` varchar(45) DEFAULT NULL,
  `date` datetime DEFAULT CURRENT_TIMESTAMP,
  `post` varchar(4500) DEFAULT NULL,
  `icon` varchar(4500) DEFAULT NULL,
  `image` varchar(4500) DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `posts`
--

LOCK TABLES `posts` WRITE;
/*!40000 ALTER TABLE `posts` DISABLE KEYS */;
INSERT INTO `posts` VALUES (1,'Leeee','2018-11-23 16:34:32','First post','img/pf.png',NULL),(2,'POLE2fitness','2018-11-24 13:52:21','New classes starting soon',NULL,NULL),(3,'fsdfdfg','2018-11-24 19:30:37','greyergdfs',NULL,NULL),(4,'af','2018-11-24 19:31:06','greyergdfsgsfsd0i-9',NULL,NULL),(5,'af','2018-11-24 19:31:16','daso230re',NULL,NULL),(6,'af','2018-11-24 19:31:16','daso230re',NULL,NULL),(7,'af','2018-11-24 19:31:16','daso230re',NULL,NULL),(8,'af','2018-11-24 19:31:17','daso230re',NULL,NULL),(9,'af','2018-11-24 19:31:17','daso230re',NULL,NULL),(10,'af','2018-11-24 19:31:17','daso230re',NULL,NULL);
/*!40000 ALTER TABLE `posts` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `schedule`
--

DROP TABLE IF EXISTS `schedule`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
 SET character_set_client = utf8mb4 ;
CREATE TABLE `schedule` (
  `id` int(11) NOT NULL AUTO_INCREMENT,
  `class_id` int(11) DEFAULT NULL,
  `date` datetime DEFAULT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `id_UNIQUE` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=432 DEFAULT CHARSET=latin1;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `schedule`
--

LOCK TABLES `schedule` WRITE;
/*!40000 ALTER TABLE `schedule` DISABLE KEYS */;
INSERT INTO `schedule` VALUES (402,1,'2018-11-26 18:00:00'),(403,1,'2018-12-03 18:00:00'),(404,1,'2018-12-10 18:00:00'),(405,1,'2018-12-17 18:00:00'),(406,1,'2018-12-24 18:00:00'),(407,2,'2018-11-26 19:05:00'),(408,2,'2018-12-03 19:05:00'),(409,2,'2018-12-10 19:05:00'),(410,2,'2018-12-17 19:05:00'),(411,2,'2018-12-24 19:05:00'),(412,3,'2018-11-27 19:00:00'),(413,3,'2018-12-04 19:00:00'),(414,3,'2018-12-11 19:00:00'),(415,3,'2018-12-18 19:00:00'),(416,3,'2018-12-25 19:00:00'),(417,4,'2018-11-28 18:30:00'),(418,4,'2018-12-05 18:30:00'),(419,4,'2018-12-12 18:30:00'),(420,4,'2018-12-19 18:30:00'),(421,4,'2018-12-26 18:30:00'),(422,5,'2018-11-28 19:30:00'),(423,5,'2018-12-05 19:30:00'),(424,5,'2018-12-12 19:30:00'),(425,5,'2018-12-19 19:30:00'),(426,5,'2018-12-26 19:30:00'),(427,6,'2018-11-29 19:00:00'),(428,6,'2018-12-06 19:00:00'),(429,6,'2018-12-13 19:00:00'),(430,6,'2018-12-20 19:00:00'),(431,6,'2018-12-27 19:00:00');
/*!40000 ALTER TABLE `schedule` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2018-11-27 12:27:17
