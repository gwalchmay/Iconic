-- MySQL dump 10.13  Distrib 8.0.21, for Linux (x86_64)
--
-- Host: localhost    Database: iconic
-- ------------------------------------------------------
-- Server version	8.0.21-cluster

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8mb4 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;

--
-- Table structure for table `hero`
--

DROP TABLE IF EXISTS `hero`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `hero` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(80) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=31 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `hero`
--

LOCK TABLES `hero` WRITE;
/*!40000 ALTER TABLE `hero` DISABLE KEYS */;
INSERT INTO `hero` VALUES (15,'Superman'),(16,'Batman'),(17,'Captain America'),(18,'Wonder Woman'),(19,'Green Lantern'),(20,'Aquaman'),(21,'Invincible'),(22,'Green Arrow'),(23,'Iron Man'),(25,'Hulk'),(26,'Flash'),(27,'Captain Marvel'),(28,'Black Widow'),(29,'Thor'),(30,'Starlord');
/*!40000 ALTER TABLE `hero` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `picture`
--

DROP TABLE IF EXISTS `picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `picture` (
  `id` int NOT NULL AUTO_INCREMENT,
  `filename` varchar(250) NOT NULL,
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=25 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `picture`
--

LOCK TABLES `picture` WRITE;
/*!40000 ALTER TABLE `picture` DISABLE KEYS */;
INSERT INTO `picture` VALUES (16,'1595590903064-AC1.jpg'),(17,'1595590952726-aquaman.png'),(18,'1595591072466-arrow.jpg'),(19,'1595591153063-batinc.jpg'),(20,'1595591428655-batresilience.jpg'),(21,'1595591475582-batslap.jpg'),(22,'1595591554732-hdhyperclan.jpg'),(23,'1595591675133-supcide.jpg'),(24,'1595593011297-aquaman.png');
/*!40000 ALTER TABLE `picture` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(200) NOT NULL,
  `shortD` text NOT NULL,
  `longD` text NOT NULL,
  `publisher` varchar(20) NOT NULL,
  `comic` varchar(40) NOT NULL,
  `date` date NOT NULL,
  `category` varchar(20) NOT NULL,
  `hero_id` int NOT NULL,
  `hero_id2` int DEFAULT NULL,
  `hero_id3` int DEFAULT NULL,
  `picture_id` int NOT NULL,
  `picture_id2` int DEFAULT NULL,
  `picture_id3` int DEFAULT NULL,
  PRIMARY KEY (`id`),
  KEY `FK_heroId` (`hero_id`),
  KEY `FK_heroId2` (`hero_id2`),
  KEY `FK_heroId3` (`hero_id3`),
  KEY `FK_pictureId` (`picture_id`),
  KEY `FK_pictureId2` (`picture_id2`),
  KEY `FK_pictureId3` (`picture_id3`),
  CONSTRAINT `FK_heroId` FOREIGN KEY (`hero_id`) REFERENCES `hero` (`id`),
  CONSTRAINT `FK_heroId2` FOREIGN KEY (`hero_id2`) REFERENCES `hero` (`id`),
  CONSTRAINT `FK_heroId3` FOREIGN KEY (`hero_id3`) REFERENCES `hero` (`id`),
  CONSTRAINT `FK_pictureId` FOREIGN KEY (`picture_id`) REFERENCES `picture` (`id`),
  CONSTRAINT `FK_pictureId2` FOREIGN KEY (`picture_id2`) REFERENCES `picture` (`id`),
  CONSTRAINT `FK_pictureId3` FOREIGN KEY (`picture_id3`) REFERENCES `picture` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Where it all began','Superman throw a car at crime !','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','DC','Action comics #1','1938-05-01','badass',15,NULL,NULL,16,NULL,NULL),(2,'Aquaman is a badass','Aquaman\'s powers are scarier than anticipated','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','DC','JLA #1','2020-05-01','badass',20,NULL,NULL,17,NULL,NULL),(3,'Green Arrow is bad at naming things','Harley Quinn helps him find a better name for the arrow cave','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','DC','Injustice Year Two #1','2017-06-01','funny',22,NULL,NULL,18,NULL,NULL),(4,'The birth of Batman, Inc','Bruce Wayne unveils his new crime-fighting initiative','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.','DC','Batman, Inc #1','2013-08-01','inspirationnal',16,NULL,NULL,19,NULL,NULL),(5,'\"I\'m still here\"','Batman never gives up','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','DC','Batman #937','2015-10-01','badass',16,NULL,NULL,20,NULL,NULL),(6,'Shut up Robin!','His parents are dead...','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','DC','Batman 433','1969-11-01','funny',16,NULL,NULL,21,NULL,NULL),(7,'Batman battles the Hyperclan','Facing three superman-level threats like it\'s nothing','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','DC','Justice League of America #8','1998-03-01','funny',16,NULL,NULL,22,NULL,NULL),(8,'You\'re much stronger than you think you are.','Saving lives isn\'t always about punching things.','Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum','DC','All-Star Superman #4','2005-04-01','inspirationnal',15,NULL,NULL,23,NULL,NULL),(9,'Thor','bla bla','bla bla bla bla','Marvel','thor #1','1975-01-01','badass',29,NULL,NULL,24,NULL,NULL);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `username` varchar(45) NOT NULL,
  `password` varchar(250) NOT NULL,
  PRIMARY KEY (`id`),
  UNIQUE KEY `username` (`username`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'bloub','blouby'),(2,'blouby2','blouby2'),(3,'blouby3','blouby3'),(4,'blouby4','blouby4'),(5,'bloubo','$2b$10$0D5zBc0hui16kNuFzI1Nfu4AL5Uxk3615zCBcmLxrPLiln0cxo8B2'),(6,'blouba','$2b$10$Y4hjvmKMId0wVJVTIjbssO93eewrZepQa0HFfWwHqZq.6uHJ4t3n6'),(7,'bloubi','$2b$10$QYnRcnNxj0PdiHBL28XP4Okm//6uzGU8QNk5uLsNy1C5Dtk9.Rr5a'),(8,'bloubu','$2b$10$bX53AMNRRYmchM8Ueoj0weuj/PxV66XQSjuIPHV7iFPeyJpy64mhi');
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2020-07-27 10:03:20
