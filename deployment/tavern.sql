-- MySQL dump 10.13  Distrib 8.0.27, for Win64 (x86_64)
--
-- Host: localhost    Database: tavern
-- ------------------------------------------------------
-- Server version	8.0.27

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

DROP DATABASE IF EXISTS tavern;
CREATE DATABASE tavern;
USE tavern;
SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

--
-- Table structure for table `comment`
--

DROP TABLE IF EXISTS `comment`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `comment` (
                           `id` int NOT NULL AUTO_INCREMENT,
                           `content` text NOT NULL,
                           `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                           `postId` int NOT NULL,
                           `creatorId` int NOT NULL,
                           `likeCount` int NOT NULL DEFAULT '0',
                           `dislikeCount` int NOT NULL DEFAULT '0',
                           PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=122 DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `comment`
--

LOCK TABLES `comment` WRITE;
/*!40000 ALTER TABLE `comment` DISABLE KEYS */;
INSERT INTO `comment` VALUES (1,'I afraid I disagree.','2022-12-08 22:29:53',0,18,0,1),(2,'Thanks for sharing','2022-12-08 22:29:53',0,26,2,0),(3,'Hey good post.','2022-12-08 22:29:53',0,37,3,3),(4,'Just checking','2022-12-08 22:29:53',1,33,2,3),(5,'Hey good post.','2022-12-08 22:29:53',1,34,0,4),(6,'Hey good post.','2022-12-08 22:29:53',1,3,2,1),(7,'Thanks for sharing','2022-12-08 22:29:53',2,32,3,0),(8,'I afraid I disagree.','2022-12-08 22:29:53',2,40,3,4),(9,'Just checking','2022-12-08 22:29:53',2,17,1,4),(10,'Hey good post.','2022-12-08 22:29:53',2,20,3,2),(11,'Just checking','2022-12-08 22:29:53',3,27,0,1),(12,'Thanks for sharing','2022-12-08 22:29:53',4,22,4,2),(13,'Thanks for sharing','2022-12-08 22:29:53',5,27,2,2),(14,'Thanks for sharing','2022-12-08 22:29:53',5,32,4,3),(15,'Good thought','2022-12-08 22:29:53',5,24,4,1),(16,'Good thought','2022-12-08 22:29:53',5,20,1,0),(17,'Thanks for sharing','2022-12-08 22:29:53',5,40,4,1),(18,'Very useful information.','2022-12-08 22:29:53',6,28,2,1),(19,'Very useful information.','2022-12-08 22:29:53',6,16,3,4),(20,'Very useful information.','2022-12-08 22:29:53',6,36,0,1),(21,'Thanks for sharing','2022-12-08 22:29:53',6,12,4,2),(22,'Thanks for sharing','2022-12-08 22:29:53',6,6,0,4),(23,'Very useful information.','2022-12-08 22:29:53',7,31,2,4),(24,'Good thought','2022-12-08 22:29:53',7,34,0,3),(25,'Hey good post.','2022-12-08 22:29:53',7,26,2,2),(26,'Thanks for sharing','2022-12-08 22:29:53',8,22,3,2),(27,'What a joke','2022-12-08 22:29:53',8,2,2,4),(28,'Very useful information.','2022-12-08 22:29:53',8,22,4,2),(29,'Very useful information.','2022-12-08 22:29:53',9,31,2,3),(30,'What a joke','2022-12-08 22:29:53',10,23,1,4),(31,'Very useful information.','2022-12-08 22:29:53',11,14,3,2),(32,'Very useful information.','2022-12-08 22:29:53',11,22,0,2),(33,'Good thought','2022-12-08 22:29:53',11,18,0,0),(34,'Thanks for sharing','2022-12-08 22:29:53',12,31,3,4),(35,'I afraid I disagree.','2022-12-08 22:29:53',12,31,0,4),(36,'Very useful information.','2022-12-08 22:29:53',12,23,0,0),(37,'Very useful information.','2022-12-08 22:29:53',12,11,2,2),(38,'Good thought','2022-12-08 22:29:53',13,3,1,4),(39,'Just checking','2022-12-08 22:29:53',13,26,4,0),(40,'What a joke','2022-12-08 22:29:53',13,32,3,1),(41,'Hey good post.','2022-12-08 22:29:53',14,36,1,0),(42,'Very useful information.','2022-12-08 22:29:53',14,2,3,0),(43,'Just checking','2022-12-08 22:29:53',14,7,3,3),(44,'Very useful information.','2022-12-08 22:29:53',15,19,1,4),(45,'What a joke','2022-12-08 22:29:53',15,8,3,4),(46,'Good thought','2022-12-08 22:29:53',15,24,3,0),(47,'Thanks for sharing','2022-12-08 22:29:53',16,40,2,2),(48,'What a joke','2022-12-08 22:29:53',16,6,2,3),(49,'Very useful information.','2022-12-08 22:29:53',16,11,1,4),(50,'Good thought','2022-12-08 22:29:53',16,32,2,1),(51,'What a joke','2022-12-08 22:29:53',17,7,3,0),(52,'Thanks for sharing','2022-12-08 22:29:53',17,20,2,2),(53,'What a joke','2022-12-08 22:29:53',17,13,4,0),(54,'What a joke','2022-12-08 22:29:53',17,15,4,4),(55,'Just checking','2022-12-08 22:29:53',18,6,4,0),(56,'Just checking','2022-12-08 22:29:53',18,24,4,3),(57,'Just checking','2022-12-08 22:29:53',18,21,0,1),(58,'I afraid I disagree.','2022-12-08 22:29:53',18,9,3,3),(59,'I afraid I disagree.','2022-12-08 22:29:53',19,10,3,2),(60,'Good thought','2022-12-08 22:29:53',19,26,2,3),(61,'Just checking','2022-12-08 22:29:53',19,37,3,3),(62,'Just checking','2022-12-08 22:29:53',19,36,4,2),(63,'Just checking','2022-12-08 22:29:53',20,27,3,3),(64,'Good thought','2022-12-08 22:29:53',21,1,4,2),(65,'I afraid I disagree.','2022-12-08 22:29:53',21,14,1,1),(66,'Very useful information.','2022-12-08 22:29:53',21,17,4,0),(67,'What a joke','2022-12-08 22:29:53',21,21,0,1),(68,'I afraid I disagree.','2022-12-08 22:29:53',22,4,0,2),(69,'Just checking','2022-12-08 22:29:53',22,32,2,4),(70,'Hey good post.','2022-12-08 22:29:53',23,39,3,0),(71,'What a joke','2022-12-08 22:29:53',23,33,3,0),(72,'Very useful information.','2022-12-08 22:29:53',23,38,2,3),(73,'I afraid I disagree.','2022-12-08 22:29:53',23,28,0,2),(74,'Hey good post.','2022-12-08 22:29:53',23,24,2,1),(75,'What a joke','2022-12-08 22:29:53',24,14,0,0),(76,'Just checking','2022-12-08 22:29:53',24,14,0,3),(77,'Very useful information.','2022-12-08 22:29:53',24,14,3,0),(78,'What a joke','2022-12-08 22:29:53',24,21,2,2),(79,'Very useful information.','2022-12-08 22:29:53',25,4,3,3),(80,'Thanks for sharing','2022-12-08 22:29:53',25,19,3,4),(81,'Very useful information.','2022-12-08 22:29:53',25,7,1,0),(82,'Just checking','2022-12-08 22:29:53',26,25,3,1),(83,'Thanks for sharing','2022-12-08 22:29:53',26,13,2,3),(84,'Thanks for sharing','2022-12-08 22:29:53',26,10,0,3),(85,'Thanks for sharing','2022-12-08 22:29:53',27,5,2,2),(86,'I afraid I disagree.','2022-12-08 22:29:53',27,38,2,3),(87,'Thanks for sharing','2022-12-08 22:29:53',28,13,2,3),(88,'Thanks for sharing','2022-12-08 22:29:53',28,33,3,3),(89,'I afraid I disagree.','2022-12-08 22:29:53',29,12,4,2),(90,'Hey good post.','2022-12-08 22:29:53',29,12,0,3),(91,'What a joke','2022-12-08 22:29:53',29,2,1,3),(92,'Hey good post.','2022-12-08 22:29:53',29,9,4,2),(93,'Thanks for sharing','2022-12-08 22:29:53',29,4,0,1),(94,'Just checking','2022-12-08 22:29:53',30,5,0,3),(95,'Very useful information.','2022-12-08 22:29:53',30,29,4,0),(96,'Very useful information.','2022-12-08 22:29:53',30,9,1,3),(97,'Just checking','2022-12-08 22:29:53',31,40,2,3),(98,'Hey good post.','2022-12-08 22:29:53',31,40,2,3),(99,'Thanks for sharing','2022-12-08 22:29:53',31,10,1,0),(100,'Very useful information.','2022-12-08 22:29:53',31,18,3,1),(101,'Thanks for sharing','2022-12-08 22:29:53',32,33,4,2),(102,'I afraid I disagree.','2022-12-08 22:29:53',33,22,2,0),(103,'Just checking','2022-12-08 22:29:54',33,23,4,2),(104,'Thanks for sharing','2022-12-08 22:29:54',33,5,4,2),(105,'What a joke','2022-12-08 22:29:54',34,31,3,0),(106,'Thanks for sharing','2022-12-08 22:29:54',35,38,2,2),(107,'Very useful information.','2022-12-08 22:29:54',35,17,2,2),(108,'Very useful information.','2022-12-08 22:29:54',35,14,3,2),(109,'Good thought','2022-12-08 22:29:54',35,19,3,1),(110,'Just checking','2022-12-08 22:29:54',36,10,0,2),(111,'Hey good post.','2022-12-08 22:29:54',36,5,3,1),(112,'What a joke','2022-12-08 22:29:54',36,7,2,1),(113,'I afraid I disagree.','2022-12-08 22:29:54',36,35,2,2),(114,'Good thought','2022-12-08 22:29:54',37,33,1,3),(115,'Hey good post.','2022-12-08 22:29:54',37,19,3,2),(116,'Thanks for sharing','2022-12-08 22:29:54',38,20,0,2),(117,'Thanks for sharing','2022-12-08 22:29:54',38,12,4,2),(118,'Very useful information.','2022-12-08 22:29:54',38,10,1,1),(119,'Hey good post.','2022-12-08 22:29:54',39,32,0,1),(120,'Very useful information.','2022-12-08 22:29:54',39,4,1,2),(121,'Hey good post.','2022-12-08 22:29:54',39,24,1,0);
/*!40000 ALTER TABLE `comment` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `company`
--

DROP TABLE IF EXISTS `company`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `company` (
                           `id` int NOT NULL AUTO_INCREMENT,
                           `name` varchar(50) NOT NULL,
                           `score` double DEFAULT '0',
                           `num_review` int DEFAULT '0',
                           `num_post` int DEFAULT '0',
                           `time_latest_post` timestamp NULL DEFAULT NULL,
                           `logo_url` varchar(200) DEFAULT NULL,
                           `published` tinyint NOT NULL DEFAULT '0',
                           `description` text,
                           `web_url` varchar(200) DEFAULT NULL,
                           PRIMARY KEY (`id`),
                           UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=11 DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `company`
--

LOCK TABLES `company` WRITE;
/*!40000 ALTER TABLE `company` DISABLE KEYS */;
INSERT INTO `company` VALUES (1,'Ebay',4.7,24,6,'2022-12-08 22:16:41','https://upload.wikimedia.org/wikipedia/commons/1/1b/EBay_logo.svg',1,'eBay Inc. is an American multinational e-commerce company based in San Jose, California, that facilitates consumer-to-consumer and business-to-consumer sales through its website. The company manages the eBay website, an online auction and shopping website in which people and businesses buy and sell a wide variety of goods and services worldwide.','https://www.ebayinc.com/company/'),(2,'Google',4.9,60,5,'2022-12-08 22:16:41','https://upload.wikimedia.org/wikipedia/commons/2/2f/Google_2015_logo.svg',1,'Google LLC is an American multinational technology company focusing on search engine technology, online advertising, cloud computing, computer software, quantum computing, e-commerce, artificial intelligence, and consumer electronics. It has been referred to as \"the most powerful company in the world\" and one of the world\'s most valuable brands.','https://about.google/'),(3,'Amazon',4.2,45,5,'2022-12-08 22:16:41','https://www.logosurfer.com/wp-content/uploads/2018/03/amazon-logo_1.png',1,'Amazon.com, Inc. is an American multinational technology company focusing on e-commerce, cloud computing, online advertising, digital streaming, and artificial intelligence. It has been referred to as \"one of the most influential economic and cultural forces in the world\", and is one of the world\'s most valuable brands.','https://www.aboutamazon.com/'),(4,'Expedia',4.1,21,3,'2022-12-08 22:16:41','https://upload.wikimedia.org/wikipedia/commons/5/5b/Expedia_2012_logo.svg',1,'Expedia Inc. is an online travel agency owned by Expedia Group, an American online travel shopping company based in Seattle. The website and mobile app can be used to book airline tickets, hotel reservations, car rentals, cruise ships, and vacation packages.','https://www.expediagroup.com/home/default.aspx'),(5,'Microsoft',4.6,78,7,'2022-12-08 22:16:41','https://www.logosurfer.com/wp-content/uploads/2018/03/microsoft-logo_0.png',1,'Microsoft Corporation is an American multinational technology corporation producing computer software, consumer electronics, personal computers, and related services headquartered at the Microsoft Redmond campus located in Redmond, Washington, United States.','https://www.microsoft.com/en-us/about'),(6,'Apple',4.4,44,3,'2022-12-08 22:16:41','https://www.pngmart.com/files/10/Apple-Logo-PNG-Photos.png',1,'Apple Inc. is an American multinational technology company headquartered in Cupertino, California, United States. Apple is the largest technology company by revenue and is the world\'s biggest company by market capitalization and second-largest mobile phone manufacturer.','https://www.apple.com/'),(7,'Meta',2.1,78,6,'2022-12-08 22:16:41','https://www.freelogovectors.net/svg10/facebook_meta_logo-freelogovectors.net_.svg',1,'Meta Platforms, Inc., doing business as Meta and formerly named Facebook, Inc., and TheFacebook, Inc., is an American multinational technology conglomerate based in Menlo Park, California. The company owns Facebook, Instagram, and WhatsApp, among other products and services.','https://about.meta.com/'),(8,'Netflix',4.7,34,5,'2022-12-08 22:16:41','https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png',1,'Netflix, Inc. is an American subscription streaming service and production company based in Los Gatos, California. Founded in 1997 by Reed Hastings and Marc Randolph in Scotts Valley, California, it offers a film and television series library through distribution deals as well as its own productions, known as Netflix Originals.','https://about.netflix.com/en'),(9,'Intel',0,0,0,NULL,'https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/Intel_logo_%282020%2C_dark_blue%29.svg/512px-Intel_logo_%282020%2C_dark_blue%29.svg.png',1,'Intel Corporation is an American multinational corporation and technology company headquartered in Santa Clara, California. It is the world\'s largest semiconductor chip manufacturer by revenue, and is one of the developers of the x86 series of instruction sets, the instruction sets found in most personal computers (PCs).','https://www.intc.com/about-intel'),(10,'Bloomberg',0,0,0,NULL,'https://www.logosurfer.com/wp-content/uploads/2018/03/bloomberg-logo_0.png',0,'Bloomberg L.P. is a privately held financial, software, data, and media company headquartered in Midtown Manhattan, New York City. Bloomberg L.P. provides financial software tools and enterprise applications such as analytics and equity trading platform, data services, and news to financial companies and organizations through the Bloomberg Terminal.',NULL);
/*!40000 ALTER TABLE `company` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meeting`
--

DROP TABLE IF EXISTS `meeting`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meeting` (
                           `id` int NOT NULL AUTO_INCREMENT,
                           `title` varchar(50) NOT NULL,
                           `hostId` int NOT NULL,
                           `meetingTime` timestamp NOT NULL,
                           `meetingStatus` tinyint(1) NOT NULL,
                           `isGroupMeeting` tinyint(1) NOT NULL,
                           `description` varchar(100) DEFAULT NULL,
                           UNIQUE KEY `id_pk` (`id`),
                           KEY `hostId_fk` (`hostId`),
                           CONSTRAINT `hostId_fk` FOREIGN KEY (`hostId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=61 DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meeting`
--

LOCK TABLES `meeting` WRITE;
/*!40000 ALTER TABLE `meeting` DISABLE KEYS */;
INSERT INTO `meeting` VALUES (1,'How to find a job as DS',1,'2022-11-13 21:48:48',0,0,'Share my work experience as a staff DS'),(2,'Common interview process as SDE',1,'2022-11-07 07:25:22',3,0,'Share my work experience as a entry level SDE'),(3,'Engineer info session: Google',1,'2022-11-11 17:26:00',0,0,'Cracking the coding interview in Google'),(4,'Common interview process in Expedia',1,'2022-11-10 12:14:50',0,0,'Cracking the coding interview in Expedia'),(5,'Engineer info session: SDE',1,'2022-11-08 00:58:38',0,0,'Share my work experience as a entry level SDE'),(6,'Engineer info session: Apple',1,'2022-11-10 20:50:32',0,0,'How to succeed in Apple'),(7,'HR info session: Meta',1,'2022-11-14 19:21:10',0,0,'Cracking the coding interview in Meta'),(8,'Engineer info session: Google',1,'2022-11-06 12:18:12',3,0,'Cracking the coding interview in Google'),(9,'HR info session: AS',1,'2022-11-10 18:02:51',0,0,'Daily lives as a principal AS'),(10,'How to find a job in Apple',1,'2022-11-09 12:12:09',3,0,'Share my interview experience with Apple'),(11,'How to find a job as SDE',1,'2022-11-10 05:04:15',0,0,'Daily lives as a entry level SDE'),(12,'Info session: Google',1,'2022-11-09 12:48:49',0,0,'How to succeed in Google'),(13,'HR info session: Meta',1,'2022-11-10 20:54:24',0,0,'How to succeed in Meta'),(14,'HR info session: SDE',1,'2022-11-09 05:14:43',0,0,'Share my work experience as a entry level SDE'),(15,'Info session: Apple',1,'2022-11-14 09:42:08',0,0,'Cracking the coding interview in Apple'),(16,'Engineer info session: DS',1,'2022-11-11 14:20:54',0,0,'Share my work experience as a senior DS'),(17,'Engineer info session: Amazon',1,'2022-11-05 06:36:20',0,0,'How to succeed in Amazon'),(18,'Common interview process in Expedia',1,'2022-11-13 23:23:33',0,0,'Share my interview experience with Expedia'),(19,'Common interview process in Expedia',1,'2022-11-08 20:55:31',0,0,'Cracking the coding interview in Expedia'),(20,'Engineer info session: SDE',1,'2022-11-10 15:46:32',0,1,'Share my work experience as a staff SDE'),(21,'Engineer info session: Expedia',1,'2022-11-09 17:23:21',3,1,'Share my interview experience with Expedia'),(22,'Engineer info session: Amazon',1,'2022-11-11 18:09:17',0,1,'Share my interview experience with Amazon'),(23,'Engineer info session: DS',1,'2022-11-08 07:38:05',0,1,'Share my work experience as a staff DS'),(24,'How to find a job as DS',1,'2022-11-09 13:43:50',3,1,'Share my work experience as a entry level DS'),(25,'Info session: Apple',1,'2022-11-07 06:00:57',3,1,'Cracking the coding interview in Apple'),(26,'Engineer info session: Apple',1,'2022-11-14 08:34:49',0,1,'Share my interview experience with Apple'),(27,'Engineer info session: AS',1,'2022-11-03 02:01:18',0,1,'Daily lives as a staff AS'),(28,'Engineer info session: DS',1,'2022-11-07 08:30:21',3,1,'Daily lives as a principal DS'),(29,'Engineer info session: Apple',1,'2022-11-06 11:00:46',0,1,'Share my interview experience with Apple'),(30,'HR info session: SDE',1,'2022-11-10 23:15:18',3,1,'Daily lives as a entry level SDE'),(31,'Common interview process as SDE',1,'2022-11-11 13:07:16',0,1,'Share my work experience as a principal SDE'),(32,'Engineer info session: Apple',1,'2022-11-06 14:01:23',0,1,'How to succeed in Apple'),(33,'HR info session: Microsoft',1,'2022-11-08 14:17:42',0,1,'Share my interview experience with Microsoft'),(34,'Common interview process in Ebay',1,'2022-11-09 05:06:16',0,1,'Share my interview experience with Ebay'),(35,'Common interview process in Apple',1,'2022-11-13 11:51:41',0,1,'Cracking the coding interview in Apple'),(36,'How to find a job as AS',1,'2022-11-12 05:31:40',0,1,'Share my work experience as a senior AS'),(37,'Engineer info session: SDE',1,'2022-11-04 17:22:43',3,1,'Daily lives as a principal SDE'),(38,'How to find a job as DS',1,'2022-11-04 23:19:25',3,1,'Share my work experience as a principal DS'),(39,'Common interview process as DS',1,'2022-11-13 02:08:01',3,1,'Daily lives as a senior DS'),(40,'How to find a job as SDE',1,'2022-11-03 04:46:37',0,0,'Share my work experience as a senior SDE'),(41,'Common interview process in Apple',1,'2022-11-13 04:45:18',3,0,'Cracking the coding interview in Apple'),(42,'How to find a job in Microsoft',1,'2022-11-03 17:28:23',0,0,'Share my interview experience with Microsoft'),(43,'Common interview process in Amazon',1,'2022-11-04 08:46:18',0,0,'How to succeed in Amazon'),(44,'HR info session: Amazon',1,'2022-11-10 14:00:55',3,0,'How to succeed in Amazon'),(45,'Engineer info session: AS',1,'2022-11-08 14:11:23',0,1,'Daily lives as a entry level AS'),(46,'Engineer info session: Google',1,'2022-11-13 14:30:45',0,1,'Share my interview experience with Google'),(47,'Engineer info session: SDE',1,'2022-11-11 10:50:58',0,1,'Daily lives as a principal SDE'),(48,'Info session: Apple',1,'2022-11-12 20:26:59',0,0,'How to succeed in Apple'),(49,'Engineer info session: DS',1,'2022-11-12 03:16:57',3,1,'Share my work experience as a principal DS'),(50,'Engineer info session: DS',1,'2022-11-06 11:43:50',0,0,'Daily lives as a staff DS'),(51,'Common interview process in Ebay',1,'2022-11-08 11:45:02',0,1,'Cracking the coding interview in Ebay'),(52,'How to find a job as DS',1,'2022-11-13 01:22:13',0,1,'Share my work experience as a principal DS'),(53,'How to find a job as SDE',1,'2022-11-13 07:22:10',3,0,'Share my work experience as a principal SDE'),(54,'Engineer info session: SDE',1,'2022-11-03 05:12:31',0,1,'Share my work experience as a entry level SDE'),(55,'Common interview process in Expedia',1,'2022-11-05 12:40:00',0,0,'How to succeed in Expedia'),(56,'Engineer info session: Microsoft',1,'2022-11-13 08:22:45',0,1,'How to succeed in Microsoft'),(57,'Common interview process as AS',1,'2022-11-05 09:10:38',0,0,'Daily lives as a staff AS'),(58,'Common interview process in Google',1,'2022-11-13 21:09:45',0,1,'Cracking the coding interview in Google'),(59,'How to find a job in Microsoft',1,'2022-11-13 05:08:02',3,1,'Cracking the coding interview in Microsoft'),(60,'HR info session: AS',1,'2022-11-13 11:26:35',0,0,'Share my work experience as a staff AS');
/*!40000 ALTER TABLE `meeting` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meeting_team`
--

DROP TABLE IF EXISTS `meeting_team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meeting_team` (
                                `meetingId` int NOT NULL,
                                `teamId` int NOT NULL,
                                KEY `meetingId_fk` (`meetingId`),
                                KEY `teamId_fk` (`teamId`),
                                CONSTRAINT `meetingId_fk` FOREIGN KEY (`meetingId`) REFERENCES `meeting` (`id`),
                                CONSTRAINT `teamId_fk` FOREIGN KEY (`teamId`) REFERENCES `team` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meeting_team`
--

LOCK TABLES `meeting_team` WRITE;
/*!40000 ALTER TABLE `meeting_team` DISABLE KEYS */;
INSERT INTO `meeting_team` VALUES (20,5),(21,9),(21,8),(21,11),(21,13),(22,14),(22,3),(22,14),(22,7),(22,5),(23,10),(23,5),(23,2),(23,14),(23,4),(24,8),(24,4),(24,1),(24,9),(24,1),(25,14),(26,9),(26,10),(27,14),(28,3),(28,8),(28,11),(28,5),(29,4),(30,4),(30,9),(30,9),(30,8),(30,5),(31,11),(31,1),(31,4),(31,9),(31,8),(32,11),(32,14),(32,8),(33,7),(33,14),(34,7),(35,8),(35,4),(36,10),(36,9),(36,14),(36,5),(36,5),(37,4),(38,7),(38,8),(39,3),(39,10),(39,10);
/*!40000 ALTER TABLE `meeting_team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `meeting_user`
--

DROP TABLE IF EXISTS `meeting_user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `meeting_user` (
                                `meetingId` int NOT NULL,
                                `userId` int NOT NULL,
                                KEY `meetingId_fk1` (`meetingId`),
                                KEY `userId_fk` (`userId`),
                                CONSTRAINT `meetingId_fk1` FOREIGN KEY (`meetingId`) REFERENCES `meeting` (`id`),
                                CONSTRAINT `userId_fk` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `meeting_user`
--

LOCK TABLES `meeting_user` WRITE;
/*!40000 ALTER TABLE `meeting_user` DISABLE KEYS */;
INSERT INTO `meeting_user` VALUES (1,9),(2,2),(2,35),(2,22),(2,27),(3,32),(3,10),(3,15),(3,3),(4,32),(4,40),(4,18),(5,18),(5,28),(5,34),(5,2),(6,8),(6,11),(6,4),(6,5),(6,22),(7,32),(7,21),(7,12),(7,25),(7,21),(8,8),(8,5),(9,13),(9,20),(9,37),(9,1),(10,10),(10,33),(10,3),(10,13),(10,30),(11,16),(11,12),(11,33),(12,37),(12,12),(12,10),(13,23),(13,35),(13,29),(13,31),(13,28),(14,35),(14,2),(14,1),(15,24),(15,14),(16,21),(16,22),(16,8),(16,36),(16,37),(17,7),(17,28),(17,5),(17,11),(18,37),(18,29),(19,20),(19,33),(19,9),(19,38);
/*!40000 ALTER TABLE `meeting_user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `post`
--

DROP TABLE IF EXISTS `post`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `post` (
                        `id` int NOT NULL AUTO_INCREMENT,
                        `title` varchar(100) NOT NULL,
                        `content` text NOT NULL,
                        `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
                        `companyId` int DEFAULT NULL,
                        `creatorId` int NOT NULL,
                        `clickNum` int NOT NULL DEFAULT '0',
                        PRIMARY KEY (`id`),
                        KEY `companyId_idx` (`companyId`),
                        KEY `creatorId_idx` (`creatorId`),
                        CONSTRAINT `companyId` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `post`
--

LOCK TABLES `post` WRITE;
/*!40000 ALTER TABLE `post` DISABLE KEYS */;
INSERT INTO `post` VALUES (1,'Intel is fine','Focus on BQ questions. Easy coding questions. Although failed, but still impressive. Focus on BQ questions. Focus on BQ questions. Nice interview! Nice interview! <br>Meaningful and useful experience. Nice interview! Focus on BQ questions. Meaningful and useful experience. Meaningful and useful experience. Nice interview! An impressive experience for me. Focus on BQ questions. <br>Easy coding questions. Focus on BQ questions. Nice interview! Meaningful and useful experience. Focus on BQ questions. Focus on BQ questions. Easy coding questions. Although failed, but still impressive. ','2022-12-08 22:16:41',8,42,0),(2,'Intel is nice','Focus on BQ questions. Although failed, but still impressive. The interviewer was nice. Focus on BQ questions. Easy coding questions. Nice interview! An impressive experience for me. <br>Easy coding questions. The interviewer was nice. Meaningful and useful experience. Meaningful and useful experience. An impressive experience for me. Nice interview! An impressive experience for me. Focus on BQ questions. <br>Nice interview! Nice interview! Easy coding questions. Nice interview! Although failed, but still impressive. Focus on BQ questions. Although failed, but still impressive. Easy coding questions. ','2022-12-08 22:16:41',8,28,0),(3,'Ebay is fine','Easy coding questions. Meaningful and useful experience. Easy coding questions. Focus on BQ questions. Although failed, but still impressive. The interviewer was nice. Focus on BQ questions. <br>Focus on BQ questions. The interviewer was nice. Although failed, but still impressive. Meaningful and useful experience. An impressive experience for me. Although failed, but still impressive. An impressive experience for me. Although failed, but still impressive. <br>Meaningful and useful experience. Nice interview! Easy coding questions. Although failed, but still impressive. Although failed, but still impressive. Meaningful and useful experience. Nice interview! Although failed, but still impressive. ','2022-12-08 22:16:41',1,17,0),(4,'Amazon is amazing','The interviewer was nice. Easy coding questions. Nice interview! Meaningful and useful experience. Nice interview! Meaningful and useful experience. Nice interview! <br>The interviewer was nice. Easy coding questions. The interviewer was nice. An impressive experience for me. Meaningful and useful experience. Although failed, but still impressive. Meaningful and useful experience. The interviewer was nice. <br>Focus on BQ questions. An impressive experience for me. Although failed, but still impressive. Meaningful and useful experience. Focus on BQ questions. Although failed, but still impressive. Although failed, but still impressive. The interviewer was nice. ','2022-12-08 22:16:41',3,16,0),(5,'Microsoft is amazing','Meaningful and useful experience. Easy coding questions. Focus on BQ questions. An impressive experience for me. Nice interview! The interviewer was nice. Focus on BQ questions. <br>Although failed, but still impressive. An impressive experience for me. Although failed, but still impressive. Focus on BQ questions. The interviewer was nice. An impressive experience for me. Although failed, but still impressive. The interviewer was nice. <br>The interviewer was nice. Although failed, but still impressive. Meaningful and useful experience. Although failed, but still impressive. The interviewer was nice. Meaningful and useful experience. The interviewer was nice. Focus on BQ questions. ','2022-12-08 22:16:41',5,24,0),(6,'Ebay is impressive','Although failed, but still impressive. An impressive experience for me. Easy coding questions. An impressive experience for me. An impressive experience for me. The interviewer was nice. Meaningful and useful experience. <br>The interviewer was nice. Nice interview! An impressive experience for me. The interviewer was nice. Easy coding questions. Easy coding questions. Focus on BQ questions. Focus on BQ questions. <br>The interviewer was nice. The interviewer was nice. Easy coding questions. Focus on BQ questions. Although failed, but still impressive. An impressive experience for me. Although failed, but still impressive. Nice interview! ','2022-12-08 22:16:41',1,25,0),(7,'Microsoft is fine','Easy coding questions. Although failed, but still impressive. Nice interview! Meaningful and useful experience. The interviewer was nice. An impressive experience for me. Focus on BQ questions. <br>Easy coding questions. An impressive experience for me. Although failed, but still impressive. Focus on BQ questions. Focus on BQ questions. Although failed, but still impressive. Although failed, but still impressive. Meaningful and useful experience. <br>Meaningful and useful experience. Easy coding questions. Nice interview! An impressive experience for me. The interviewer was nice. Although failed, but still impressive. An impressive experience for me. Nice interview! ','2022-12-08 22:16:41',5,42,0),(8,'Ebay is ok','Nice interview! Nice interview! An impressive experience for me. Nice interview! An impressive experience for me. Nice interview! Focus on BQ questions. <br>The interviewer was nice. Meaningful and useful experience. Nice interview! Nice interview! Easy coding questions. Meaningful and useful experience. Nice interview! Meaningful and useful experience. <br>An impressive experience for me. The interviewer was nice. The interviewer was nice. Although failed, but still impressive. Although failed, but still impressive. Meaningful and useful experience. Meaningful and useful experience. Focus on BQ questions. ','2022-12-08 22:16:41',1,35,0),(9,'Ebay is ok','The interviewer was nice. Meaningful and useful experience. The interviewer was nice. Nice interview! Although failed, but still impressive. An impressive experience for me. An impressive experience for me. <br>An impressive experience for me. The interviewer was nice. Meaningful and useful experience. Although failed, but still impressive. Easy coding questions. Meaningful and useful experience. Focus on BQ questions. Focus on BQ questions. <br>Focus on BQ questions. Easy coding questions. Easy coding questions. The interviewer was nice. The interviewer was nice. The interviewer was nice. Nice interview! Nice interview! ','2022-12-08 22:16:41',1,6,0),(10,'Google is good','Although failed, but still impressive. Focus on BQ questions. Meaningful and useful experience. The interviewer was nice. An impressive experience for me. The interviewer was nice. Focus on BQ questions. <br>Nice interview! An impressive experience for me. Although failed, but still impressive. Meaningful and useful experience. Easy coding questions. Focus on BQ questions. Easy coding questions. The interviewer was nice. <br>Meaningful and useful experience. An impressive experience for me. Easy coding questions. The interviewer was nice. Meaningful and useful experience. Focus on BQ questions. Meaningful and useful experience. Meaningful and useful experience. ','2022-12-08 22:16:41',2,38,0),(11,'Intel is amazing','An impressive experience for me. Meaningful and useful experience. Easy coding questions. The interviewer was nice. An impressive experience for me. The interviewer was nice. Nice interview! <br>An impressive experience for me. Although failed, but still impressive. Focus on BQ questions. An impressive experience for me. Nice interview! Although failed, but still impressive. Meaningful and useful experience. An impressive experience for me. <br>Nice interview! Easy coding questions. Nice interview! An impressive experience for me. Easy coding questions. An impressive experience for me. Easy coding questions. Focus on BQ questions. ','2022-12-08 22:16:41',8,6,0),(12,'Apple is nice','An impressive experience for me. An impressive experience for me. Meaningful and useful experience. Easy coding questions. Although failed, but still impressive. Nice interview! An impressive experience for me. <br>Focus on BQ questions. The interviewer was nice. The interviewer was nice. Nice interview! Nice interview! The interviewer was nice. Focus on BQ questions. Easy coding questions. <br>Focus on BQ questions. Meaningful and useful experience. Focus on BQ questions. Although failed, but still impressive. An impressive experience for me. Although failed, but still impressive. Meaningful and useful experience. An impressive experience for me. ','2022-12-08 22:16:41',6,41,0),(13,'Meta is ok','Meaningful and useful experience. Focus on BQ questions. The interviewer was nice. Nice interview! Nice interview! Nice interview! Easy coding questions. <br>Easy coding questions. Easy coding questions. Focus on BQ questions. Nice interview! An impressive experience for me. Nice interview! Easy coding questions. Nice interview! <br>An impressive experience for me. Nice interview! Meaningful and useful experience. Nice interview! Easy coding questions. The interviewer was nice. An impressive experience for me. Meaningful and useful experience. ','2022-12-08 22:16:41',7,6,0),(14,'Microsoft is nice','An impressive experience for me. An impressive experience for me. An impressive experience for me. An impressive experience for me. Meaningful and useful experience. Although failed, but still impressive. Nice interview! <br>Although failed, but still impressive. Focus on BQ questions. Although failed, but still impressive. An impressive experience for me. Meaningful and useful experience. Focus on BQ questions. Easy coding questions. Nice interview! <br>Although failed, but still impressive. Although failed, but still impressive. Focus on BQ questions. An impressive experience for me. Focus on BQ questions. Nice interview! Nice interview! Focus on BQ questions. ','2022-12-08 22:16:41',5,15,0),(15,'Microsoft is good','The interviewer was nice. Nice interview! Focus on BQ questions. Meaningful and useful experience. Meaningful and useful experience. Although failed, but still impressive. Meaningful and useful experience. <br>Although failed, but still impressive. An impressive experience for me. Nice interview! Focus on BQ questions. Meaningful and useful experience. An impressive experience for me. Focus on BQ questions. Although failed, but still impressive. <br>Nice interview! Easy coding questions. Meaningful and useful experience. The interviewer was nice. Easy coding questions. Nice interview! The interviewer was nice. The interviewer was nice. ','2022-12-08 22:16:41',5,16,0),(16,'Google is good','The interviewer was nice. Meaningful and useful experience. Easy coding questions. Nice interview! Although failed, but still impressive. Meaningful and useful experience. Focus on BQ questions. <br>Although failed, but still impressive. Nice interview! Focus on BQ questions. Nice interview! The interviewer was nice. An impressive experience for me. Easy coding questions. An impressive experience for me. <br>Focus on BQ questions. Focus on BQ questions. Although failed, but still impressive. Meaningful and useful experience. Nice interview! Easy coding questions. Focus on BQ questions. An impressive experience for me. ','2022-12-08 22:16:41',2,16,0),(17,'Expedia is amazing','Although failed, but still impressive. Although failed, but still impressive. Focus on BQ questions. The interviewer was nice. An impressive experience for me. The interviewer was nice. Focus on BQ questions. <br>Easy coding questions. Easy coding questions. Nice interview! Focus on BQ questions. The interviewer was nice. Focus on BQ questions. The interviewer was nice. Meaningful and useful experience. <br>Easy coding questions. Meaningful and useful experience. An impressive experience for me. Meaningful and useful experience. Focus on BQ questions. Nice interview! Although failed, but still impressive. The interviewer was nice. ','2022-12-08 22:16:41',4,12,0),(18,'Google is amazing','Focus on BQ questions. The interviewer was nice. Focus on BQ questions. Easy coding questions. The interviewer was nice. Focus on BQ questions. Meaningful and useful experience. <br>An impressive experience for me. The interviewer was nice. Although failed, but still impressive. Meaningful and useful experience. The interviewer was nice. The interviewer was nice. Although failed, but still impressive. Nice interview! <br>Focus on BQ questions. Although failed, but still impressive. Focus on BQ questions. Easy coding questions. Easy coding questions. Although failed, but still impressive. Although failed, but still impressive. Meaningful and useful experience. ','2022-12-08 22:16:41',2,33,0),(19,'Microsoft is amazing','Meaningful and useful experience. Focus on BQ questions. Focus on BQ questions. Although failed, but still impressive. An impressive experience for me. Although failed, but still impressive. An impressive experience for me. <br>Focus on BQ questions. Although failed, but still impressive. Easy coding questions. Nice interview! Although failed, but still impressive. Nice interview! The interviewer was nice. The interviewer was nice. <br>Focus on BQ questions. Easy coding questions. Focus on BQ questions. The interviewer was nice. Although failed, but still impressive. Although failed, but still impressive. Nice interview! Meaningful and useful experience. ','2022-12-08 22:16:41',5,22,0),(20,'Google is fine','Focus on BQ questions. Nice interview! Focus on BQ questions. Nice interview! The interviewer was nice. Although failed, but still impressive. Meaningful and useful experience. <br>Meaningful and useful experience. Meaningful and useful experience. An impressive experience for me. Nice interview! The interviewer was nice. An impressive experience for me. Although failed, but still impressive. Focus on BQ questions. <br>An impressive experience for me. Although failed, but still impressive. Focus on BQ questions. Focus on BQ questions. Focus on BQ questions. Nice interview! Easy coding questions. An impressive experience for me. ','2022-12-08 22:16:41',2,9,0),(21,'Meta is amazing','Meaningful and useful experience. The interviewer was nice. Focus on BQ questions. Although failed, but still impressive. Focus on BQ questions. Although failed, but still impressive. Focus on BQ questions. <br>Focus on BQ questions. Easy coding questions. Although failed, but still impressive. Easy coding questions. Although failed, but still impressive. An impressive experience for me. Meaningful and useful experience. An impressive experience for me. <br>Focus on BQ questions. The interviewer was nice. The interviewer was nice. Meaningful and useful experience. Meaningful and useful experience. Focus on BQ questions. The interviewer was nice. Nice interview! ','2022-12-08 22:16:41',7,27,0),(22,'Amazon is ok','Easy coding questions. Easy coding questions. Nice interview! The interviewer was nice. Nice interview! Meaningful and useful experience. Nice interview! <br>Focus on BQ questions. Focus on BQ questions. Although failed, but still impressive. Easy coding questions. Easy coding questions. Nice interview! The interviewer was nice. The interviewer was nice. <br>Although failed, but still impressive. Easy coding questions. Although failed, but still impressive. Meaningful and useful experience. The interviewer was nice. Easy coding questions. Easy coding questions. Although failed, but still impressive. ','2022-12-08 22:16:41',3,10,0),(23,'Amazon is fine','Nice interview! An impressive experience for me. Focus on BQ questions. Focus on BQ questions. Focus on BQ questions. Meaningful and useful experience. Meaningful and useful experience. <br>Easy coding questions. Easy coding questions. Meaningful and useful experience. Focus on BQ questions. Easy coding questions. Nice interview! Easy coding questions. Although failed, but still impressive. <br>Easy coding questions. The interviewer was nice. Focus on BQ questions. Meaningful and useful experience. Focus on BQ questions. The interviewer was nice. Meaningful and useful experience. Meaningful and useful experience. ','2022-12-08 22:16:41',3,33,0),(24,'Expedia is ok','Easy coding questions. Nice interview! The interviewer was nice. Focus on BQ questions. Although failed, but still impressive. The interviewer was nice. Although failed, but still impressive. <br>An impressive experience for me. Although failed, but still impressive. Focus on BQ questions. Nice interview! Nice interview! Meaningful and useful experience. Easy coding questions. Easy coding questions. <br>Nice interview! Meaningful and useful experience. Easy coding questions. Focus on BQ questions. Nice interview! The interviewer was nice. Nice interview! Meaningful and useful experience. ','2022-12-08 22:16:41',4,39,0),(25,'Expedia is amazing','Nice interview! Focus on BQ questions. Focus on BQ questions. An impressive experience for me. The interviewer was nice. The interviewer was nice. Focus on BQ questions. <br>Focus on BQ questions. Meaningful and useful experience. Easy coding questions. Focus on BQ questions. Nice interview! Meaningful and useful experience. Easy coding questions. An impressive experience for me. <br>Nice interview! Although failed, but still impressive. Easy coding questions. Easy coding questions. Meaningful and useful experience. Meaningful and useful experience. Although failed, but still impressive. Although failed, but still impressive. ','2022-12-08 22:16:41',4,34,0),(26,'Intel is amazing','Focus on BQ questions. The interviewer was nice. Nice interview! The interviewer was nice. The interviewer was nice. The interviewer was nice. Focus on BQ questions. <br>Nice interview! Meaningful and useful experience. Meaningful and useful experience. Easy coding questions. Meaningful and useful experience. Focus on BQ questions. Meaningful and useful experience. An impressive experience for me. <br>Nice interview! An impressive experience for me. Easy coding questions. Meaningful and useful experience. Meaningful and useful experience. Easy coding questions. Nice interview! Although failed, but still impressive. ','2022-12-08 22:16:41',8,29,0),(27,'Amazon is nice','Nice interview! An impressive experience for me. Nice interview! Although failed, but still impressive. An impressive experience for me. Easy coding questions. Focus on BQ questions. <br>Nice interview! Focus on BQ questions. Easy coding questions. Easy coding questions. The interviewer was nice. Easy coding questions. Meaningful and useful experience. An impressive experience for me. <br>Meaningful and useful experience. Easy coding questions. Easy coding questions. Nice interview! Although failed, but still impressive. Although failed, but still impressive. The interviewer was nice. An impressive experience for me. ','2022-12-08 22:16:41',3,12,0),(28,'Apple is good','Easy coding questions. Although failed, but still impressive. Easy coding questions. The interviewer was nice. An impressive experience for me. Easy coding questions. Nice interview! <br>Easy coding questions. An impressive experience for me. An impressive experience for me. The interviewer was nice. Focus on BQ questions. Focus on BQ questions. Focus on BQ questions. Although failed, but still impressive. <br>The interviewer was nice. Focus on BQ questions. An impressive experience for me. Nice interview! The interviewer was nice. Although failed, but still impressive. Although failed, but still impressive. Meaningful and useful experience. ','2022-12-08 22:16:41',6,37,0),(29,'Apple is ok','Meaningful and useful experience. Although failed, but still impressive. Focus on BQ questions. Easy coding questions. Easy coding questions. Meaningful and useful experience. Although failed, but still impressive. <br>The interviewer was nice. The interviewer was nice. Meaningful and useful experience. Easy coding questions. An impressive experience for me. Easy coding questions. Focus on BQ questions. Easy coding questions. <br>Nice interview! Easy coding questions. The interviewer was nice. Focus on BQ questions. An impressive experience for me. Easy coding questions. An impressive experience for me. Although failed, but still impressive. ','2022-12-08 22:16:41',6,12,0),(30,'Google is nice','Nice interview! Easy coding questions. Easy coding questions. An impressive experience for me. Although failed, but still impressive. Focus on BQ questions. Easy coding questions. <br>The interviewer was nice. An impressive experience for me. Nice interview! Nice interview! The interviewer was nice. Nice interview! Meaningful and useful experience. Nice interview! <br>Although failed, but still impressive. Focus on BQ questions. Easy coding questions. The interviewer was nice. Easy coding questions. Nice interview! Nice interview! An impressive experience for me. ','2022-12-08 22:16:41',2,36,0),(31,'Ebay is nice','An impressive experience for me. An impressive experience for me. An impressive experience for me. Focus on BQ questions. Meaningful and useful experience. Although failed, but still impressive. Focus on BQ questions. <br>Easy coding questions. The interviewer was nice. An impressive experience for me. The interviewer was nice. Easy coding questions. The interviewer was nice. Although failed, but still impressive. The interviewer was nice. <br>The interviewer was nice. An impressive experience for me. An impressive experience for me. Focus on BQ questions. The interviewer was nice. The interviewer was nice. Easy coding questions. Although failed, but still impressive. ','2022-12-08 22:16:41',1,37,0),(32,'Meta is ok','The interviewer was nice. The interviewer was nice. Meaningful and useful experience. Nice interview! Meaningful and useful experience. Nice interview! An impressive experience for me. <br>The interviewer was nice. An impressive experience for me. An impressive experience for me. An impressive experience for me. Focus on BQ questions. Although failed, but still impressive. The interviewer was nice. Meaningful and useful experience. <br>Meaningful and useful experience. Meaningful and useful experience. Although failed, but still impressive. An impressive experience for me. An impressive experience for me. Focus on BQ questions. The interviewer was nice. Meaningful and useful experience. ','2022-12-08 22:16:41',7,38,0),(33,'Meta is impressive','Nice interview! Meaningful and useful experience. The interviewer was nice. Nice interview! Meaningful and useful experience. An impressive experience for me. Easy coding questions. <br>The interviewer was nice. Nice interview! Although failed, but still impressive. Focus on BQ questions. Focus on BQ questions. An impressive experience for me. Nice interview! Nice interview! <br>Although failed, but still impressive. Nice interview! An impressive experience for me. Focus on BQ questions. Although failed, but still impressive. Focus on BQ questions. Although failed, but still impressive. Although failed, but still impressive. ','2022-12-08 22:16:41',7,25,0),(34,'Microsoft is impressive','The interviewer was nice. Nice interview! Nice interview! Although failed, but still impressive. Easy coding questions. Although failed, but still impressive. An impressive experience for me. <br>An impressive experience for me. Focus on BQ questions. An impressive experience for me. Focus on BQ questions. Easy coding questions. The interviewer was nice. Meaningful and useful experience. An impressive experience for me. <br>Meaningful and useful experience. Focus on BQ questions. Easy coding questions. Focus on BQ questions. Focus on BQ questions. Nice interview! Nice interview! Although failed, but still impressive. ','2022-12-08 22:16:41',5,35,0),(35,'Microsoft is impressive','Focus on BQ questions. Meaningful and useful experience. Although failed, but still impressive. Although failed, but still impressive. Focus on BQ questions. Although failed, but still impressive. Nice interview! <br>Focus on BQ questions. Meaningful and useful experience. Focus on BQ questions. Although failed, but still impressive. Focus on BQ questions. An impressive experience for me. Nice interview! The interviewer was nice. <br>Easy coding questions. Focus on BQ questions. Focus on BQ questions. Nice interview! Focus on BQ questions. Focus on BQ questions. Focus on BQ questions. Focus on BQ questions. ','2022-12-08 22:16:41',5,4,0),(36,'Intel is amazing','The interviewer was nice. An impressive experience for me. Nice interview! Focus on BQ questions. Easy coding questions. An impressive experience for me. Focus on BQ questions. <br>Nice interview! Easy coding questions. Nice interview! An impressive experience for me. Easy coding questions. Nice interview! Although failed, but still impressive. Focus on BQ questions. <br>Nice interview! An impressive experience for me. Easy coding questions. An impressive experience for me. Focus on BQ questions. An impressive experience for me. Meaningful and useful experience. Although failed, but still impressive. ','2022-12-08 22:16:41',8,12,0),(37,'Meta is impressive','An impressive experience for me. Easy coding questions. Easy coding questions. The interviewer was nice. Although failed, but still impressive. Although failed, but still impressive. The interviewer was nice. <br>An impressive experience for me. Meaningful and useful experience. Although failed, but still impressive. An impressive experience for me. Nice interview! An impressive experience for me. Meaningful and useful experience. Although failed, but still impressive. <br>Although failed, but still impressive. The interviewer was nice. Meaningful and useful experience. Although failed, but still impressive. Easy coding questions. Although failed, but still impressive. Easy coding questions. Easy coding questions. ','2022-12-08 22:16:41',7,6,0),(38,'Ebay is good','An impressive experience for me. An impressive experience for me. The interviewer was nice. Meaningful and useful experience. Meaningful and useful experience. Although failed, but still impressive. The interviewer was nice. <br>Focus on BQ questions. Meaningful and useful experience. Easy coding questions. Although failed, but still impressive. Nice interview! The interviewer was nice. Nice interview! An impressive experience for me. <br>Although failed, but still impressive. An impressive experience for me. The interviewer was nice. An impressive experience for me. Easy coding questions. Focus on BQ questions. Easy coding questions. Nice interview! ','2022-12-08 22:16:41',1,3,0),(39,'Meta is good','Although failed, but still impressive. Focus on BQ questions. Nice interview! Focus on BQ questions. An impressive experience for me. Focus on BQ questions. Nice interview! <br>Although failed, but still impressive. Although failed, but still impressive. Although failed, but still impressive. Nice interview! Nice interview! The interviewer was nice. Focus on BQ questions. Although failed, but still impressive. <br>The interviewer was nice. Meaningful and useful experience. Focus on BQ questions. The interviewer was nice. Although failed, but still impressive. Meaningful and useful experience. An impressive experience for me. Easy coding questions. ','2022-12-08 22:16:41',7,21,0),(40,'Amazon is fine','Easy coding questions. Nice interview! Nice interview! Meaningful and useful experience. Nice interview! The interviewer was nice. The interviewer was nice. <br>An impressive experience for me. An impressive experience for me. Focus on BQ questions. Nice interview! Focus on BQ questions. Although failed, but still impressive. Meaningful and useful experience. An impressive experience for me. <br>The interviewer was nice. Easy coding questions. Nice interview! The interviewer was nice. The interviewer was nice. Meaningful and useful experience. The interviewer was nice. Focus on BQ questions. ','2022-12-08 22:16:41',3,28,0);
/*!40000 ALTER TABLE `post` ENABLE KEYS */;
UNLOCK TABLES;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `post_insert_trigger` AFTER INSERT ON `post` FOR EACH ROW begin
    IF New.companyId is not null
    THEN
        UPDATE tavern.company
        SET num_post = num_post+1,
            time_latest_post = NEW.`time`
        WHERE id = NEW.companyId;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `post_update_trigger` AFTER UPDATE ON `post` FOR EACH ROW begin
    IF OLD.companyId is not null and NEW.companyId is not null and OLD.companyId != NEW.companyId
    THEN
        UPDATE tavern.company
        SET num_post = num_post-1,
            time_latest_post = (select max(time) from post where companyId = OLD.companyId)
        WHERE id = OLD.companyId;
        UPDATE tavern.company
        SET num_post = num_post+1,
            time_latest_post = NEW.`time`
        WHERE id = NEW.companyId;
    elseif OLD.companyId is null and NEW.companyId is not null
    then
        UPDATE tavern.company
        SET num_post = num_post+1,
            time_latest_post = NEW.`time`
        WHERE id = NEW.companyId;
    elseif OLD.companyId is not null and NEW.companyId is null
    then
        UPDATE tavern.company
        SET num_post = num_post-1,
            time_latest_post = (select max(time) from post where companyId = OLD.companyId)
        WHERE id = OLD.companyId;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;
/*!50003 SET @saved_cs_client      = @@character_set_client */ ;
/*!50003 SET @saved_cs_results     = @@character_set_results */ ;
/*!50003 SET @saved_col_connection = @@collation_connection */ ;
/*!50003 SET character_set_client  = utf8mb4 */ ;
/*!50003 SET character_set_results = utf8mb4 */ ;
/*!50003 SET collation_connection  = utf8mb4_0900_ai_ci */ ;
/*!50003 SET @saved_sql_mode       = @@sql_mode */ ;
/*!50003 SET sql_mode              = 'ONLY_FULL_GROUP_BY,STRICT_TRANS_TABLES,NO_ZERO_IN_DATE,NO_ZERO_DATE,ERROR_FOR_DIVISION_BY_ZERO,NO_ENGINE_SUBSTITUTION' */ ;
DELIMITER ;;
/*!50003 CREATE*/ /*!50017 DEFINER=`root`@`localhost`*/ /*!50003 TRIGGER `post_delete_trigger` AFTER DELETE ON `post` FOR EACH ROW begin
    IF OLD.companyId is not null
    THEN
        UPDATE tavern.company
        SET num_post = num_post-1,
            time_latest_post = (select max(time) from post where companyId = OLD.companyId)
        WHERE id = OLD.companyId;
    END IF;
END */;;
DELIMITER ;
/*!50003 SET sql_mode              = @saved_sql_mode */ ;
/*!50003 SET character_set_client  = @saved_cs_client */ ;
/*!50003 SET character_set_results = @saved_cs_results */ ;
/*!50003 SET collation_connection  = @saved_col_connection */ ;

--
-- Table structure for table `team`
--

DROP TABLE IF EXISTS `team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `team` (
                        `id` int NOT NULL,
                        `num_member` int NOT NULL,
                        `participants` varchar(300) DEFAULT NULL,
                        `active` tinyint DEFAULT '1',
                        PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `team`
--

LOCK TABLES `team` WRITE;
/*!40000 ALTER TABLE `team` DISABLE KEYS */;
INSERT INTO `team` VALUES (1,2,'[6, 37]',1),(2,2,'[13, 5]',1),(3,2,'[16, 28]',1),(4,2,'[18, 32]',1),(5,2,'[22, 14]',1),(6,2,'[34, 20]',1),(7,2,'[39, 31]',1),(8,3,'[33, 35, 40]',1),(9,3,'[7, 8, 25]',1),(10,3,'[21, 24, 27]',1),(11,3,'[9, 11, 15]',1),(12,4,'[2, 3, 4, 10]',1),(13,4,'[19, 26, 17, 12]',1),(14,4,'[30, 36, 23, 29]',1);
/*!40000 ALTER TABLE `team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user`
--

DROP TABLE IF EXISTS `user`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user` (
                        `id` int NOT NULL AUTO_INCREMENT,
                        `password` varchar(100) NOT NULL,
                        `fName` varchar(100) NOT NULL,
                        `lName` varchar(100) NOT NULL,
                        `email` varchar(100) NOT NULL,
                        `uType` varchar(100) NOT NULL,
                        `level` varchar(100) DEFAULT NULL,
                        `numOfExp` int DEFAULT NULL,
                        `major` int DEFAULT NULL,
                        `degree` int DEFAULT NULL,
                        `rOrI` int DEFAULT NULL,
                        `timeZone` int DEFAULT NULL,
                        `school` varchar(100) DEFAULT NULL,
                        `year` int DEFAULT NULL,
                        `teamId` int DEFAULT NULL,
                        `poolId` tinyint DEFAULT '0',
                        PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=65 DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user`
--

LOCK TABLES `user` WRITE;
/*!40000 ALTER TABLE `user` DISABLE KEYS */;
INSERT INTO `user` VALUES (1,'password','FirstName','Lastname','a@test.com','a','1',NULL,NULL,NULL,NULL,NULL,NULL,NULL,NULL,0),(2,'password','Jack','Jones','p@test.com','p',NULL,4,8,1,1,1,'Johns Hopklins University',5,12,1),(3,'password','Kiley','Nolan','knolan189@wj.edu','p',NULL,2,7,1,1,0,'Western Jacobs',5,12,1),(4,'password','Jarret','Luettgen','jluettgen176@nmu.edu','p',NULL,2,1,1,0,1,'North Mississippi University',3,12,1),(5,'password','Hipolito','Bechtelar','hbechtelar11@ssc.edu','p',NULL,3,9,1,1,2,'South Schroeder College',4,2,1),(6,'password','Travon','Von','tvon198@nca.edu','p',NULL,2,8,1,1,1,'Northern California Academy',2,1,1),(7,'password','Krista','Sanford','ksanford178@mi.edu','p',NULL,3,10,2,1,2,'Mosciski Institute',1,9,1),(8,'password','Vivien','Gusikowski','vgusikowski130@bc.edu','p',NULL,1,10,2,0,2,'Boyle College',4,9,1),(9,'password','Casey','Kozey','ckozey36@sl.edu','p',NULL,3,3,2,0,2,'Southern Labadie',5,11,1),(10,'password','Heber','Goldner','hgoldner31@nb.edu','p',NULL,1,9,3,0,0,'Northern Bednar',3,12,1),(11,'password','Myrtice','Murazik','mmurazik69@ndu.edu','p',NULL,2,3,1,0,1,'North Douglas University',5,11,1),(12,'password','Issac','Boyle','iboyle47@ebi.edu','p',NULL,2,7,1,0,1,'East Breitenberg Institute',5,13,1),(13,'password','Lina','Marks','lmarks77@no.edu','p',NULL,2,9,1,0,1,'Northern Orn',2,2,1),(14,'password','Llewellyn','Rosenbaum','lrosenbaum182@mi.edu','p',NULL,4,10,2,0,0,'Murazik Institute',5,5,1),(15,'password','Destany','Cartwright','dcartwright1@woc.edu','p',NULL,4,5,2,0,0,'Western Ohio College',4,11,1),(16,'password','Ezekiel','Kling','ekling36@weu.edu','p',NULL,2,3,3,0,1,'West Emmerich University',5,3,1),(17,'password','Daphnee','Sawayn','dsawayn98@eai.edu','p',NULL,1,6,3,0,2,'East Alabama Institute',4,13,1),(18,'password','Delbert','Torp','dtorp181@ewc.edu','p',NULL,2,3,1,1,1,'Eastern Watsica College',2,4,1),(19,'password','Shanna','White','swhite60@nh.edu','p',NULL,4,8,3,1,1,'North Homenick',1,13,1),(20,'password','Lolita','Price','lprice35@nc.edu','p',NULL,2,5,2,0,0,'North Connelly',1,6,1),(21,'password','Scarlett','Friesen','sfriesen168@wg.edu','p',NULL,4,4,3,0,1,'Western Gleason',5,10,1),(22,'password','Roxane','Weissnat','rweissnat105@sma.edu','p',NULL,1,9,1,1,2,'Southern Michigan Academy',2,5,1),(23,'password','Erling','Rau','erau168@su.edu','p',NULL,2,6,3,0,1,'Schmidt University',4,14,1),(24,'password','Lance','Lakin','llakin161@wlc.edu','p',NULL,3,2,1,1,2,'Western Lubowitz College',2,10,1),(25,'password','Travis','Pagac','tpagac16@sd.edu','p',NULL,4,10,1,0,0,'South Dickinson',2,9,1),(26,'password','Cruz','Fadel','cfadel70@lu.edu','p',NULL,3,8,3,0,2,'Lindgren University',4,13,1),(27,'password','Carolyn','Amore','camore59@ewi.edu','p',NULL,3,6,1,1,1,'Eastern Wisconsin Institute',3,10,1),(28,'password','Henri','Ullrich','hullrich194@fa.edu','p',NULL,1,9,1,0,0,'Frami Academy',1,3,1),(29,'password','Dashawn','Zulauf','dzulauf121@swc.edu','p',NULL,2,10,3,0,1,'South Windler College',5,14,1),(30,'password','Trevion','Nicolas','tnicolas120@sk.edu','p',NULL,1,2,3,1,1,'Southern Kessler',2,14,1),(31,'password','Kathryn','Corwin','kcorwin31@eb.edu','p',NULL,1,2,1,0,2,'East Brakus',5,7,1),(32,'password','Mellie','Rolfson','mrolfson2@wha.edu','p',NULL,4,6,3,1,2,'West Hickle Academy',5,4,1),(33,'password','Gilberto','Fahey','gfahey102@ewc.edu','p',NULL,2,4,3,0,2,'Eastern Waters College',3,8,1),(34,'password','Sonny','Boehm','sboehm131@bi.edu','p',NULL,2,10,2,1,1,'Bartoletti Institute',4,6,1),(35,'password','Alexys','Cormier','acormier41@nl.edu','p',NULL,2,5,1,1,2,'North Leffler',3,8,1),(36,'password','Agustin','Rohan','arohan53@sndi.edu','p',NULL,3,6,1,0,1,'Southern North Dakota Institute',3,14,1),(37,'password','Alessandra','Nader','anader195@ka.edu','p',NULL,1,8,2,0,2,'Kautzer Academy',2,1,1),(38,'password','Efren','Kautzer','ekautzer106@sc.edu','p',NULL,1,7,2,1,2,'Smitham College',3,NULL,4),(39,'password','Jovany','Hyatt','jhyatt69@shu.edu','p',NULL,3,7,1,0,2,'Southern Hawaii University',5,7,1),(40,'password','Linnie','Koch','lkoch166@tru.edu','p',NULL,4,8,1,0,2,'The Romaguera University',1,8,1),(41,'password','Kelsie','Collins','kcollins35@ebu.edu','p',NULL,1,2,2,0,1,'East Barton University',1,NULL,3),(42,'password','Scotty','Smith','ssmith75@wpa.edu','p',NULL,3,3,3,1,2,'Western Pennsylvania Academy',2,NULL,2),(43,'password','Elza','Jones','ejones9@esc.edu','p',NULL,2,9,2,1,0,'Eastern Stamm College',3,NULL,3),(44,'password','Kali','Rowe','krowe92@swu.edu','p',NULL,4,6,2,1,0,'Southern Wilderman University',1,NULL,2),(45,'password','Margie','Bashirian','mbashirian73@cu.edu','p',NULL,3,7,3,1,2,'Christiansen University',1,NULL,3),(46,'password','Jason','Grant','jgrant137@sh.edu','p',NULL,3,8,1,1,2,'Southern Hyatt',1,NULL,2),(47,'password','Vincenzo','Lang','vlang81@ci.edu','p',NULL,4,5,1,0,0,'Connell Institute',3,NULL,4),(48,'password','Gust','Stracke','gstracke127@mc.edu','p',NULL,3,8,3,1,2,'Morissette College',1,NULL,3),(49,'password','Marshall','Mohr','mmohr138@ws.edu','p',NULL,1,4,3,1,1,'Western Schuster',2,NULL,3),(50,'password','Orrin','Beatty','obeatty80@tpc.edu','p',NULL,4,2,2,1,0,'The Pennsylvania College',2,NULL,2),(51,'password','Ernie','Miller','emiller20@rc.edu','p',NULL,4,8,3,0,1,'Rogahn College',1,NULL,2),(52,'password','Keith','Bode','kbode96@nki.edu','p',NULL,2,2,3,0,1,'North Klocko Institute',2,NULL,3),(53,'password','Stanton','Erdman','serdman82@et.edu','p',NULL,2,9,2,1,1,'Eastern Tillman',2,NULL,3),(54,'password','Milan','Fay','mfay152@wcc.edu','p',NULL,3,6,2,1,0,'West Cronin College',1,NULL,4),(55,'password','Marjorie','Rolfson','mrolfson93@nda.edu','p',NULL,3,5,2,0,2,'North DuBuque Academy',1,NULL,3),(56,'password','Brad','Witting','bwitting76@pi.edu','p',NULL,3,1,3,0,0,'Pacocha Institute',4,NULL,2),(57,'password','Filomena','Ledner','fledner1@ri.edu','p',NULL,1,7,1,1,0,'Runte Institute',3,NULL,2),(58,'password','Abigail','Considine','aconsidine93@si.edu','p',NULL,3,3,1,0,1,'Sporer Institute',2,NULL,3),(59,'password','Alanna','Harber','aharber48@sma.edu','p',NULL,2,4,1,0,1,'Southern Mohr Academy',2,NULL,4),(60,'password','Maryjane','Larkin','mlarkin159@sai.edu','p',NULL,3,4,1,0,2,'South Alaska Institute',3,NULL,4),(61,'password','Josefina','Ledner','jledner93@ng.edu','p',NULL,3,4,3,1,1,'Northern Green',3,NULL,3),(62,'password','Mikel','McGlynn','mmcglynn107@wbc.edu','p',NULL,1,1,2,0,2,'Western Bartoletti College',4,NULL,2),(63,'password','Freeman','Douglas','fdouglas58@nb.edu','p',NULL,2,1,3,0,1,'North Baumbach',2,NULL,0),(64,'password','Melissa','Gulgowski','mgulgowski4@sa.edu','p',NULL,1,4,2,1,2,'Southern Abernathy',3,NULL,4);
/*!40000 ALTER TABLE `user` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Table structure for table `user_team`
--

DROP TABLE IF EXISTS `user_team`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `user_team` (
                             `userId` int NOT NULL,
                             `teamId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `user_team`
--

LOCK TABLES `user_team` WRITE;
/*!40000 ALTER TABLE `user_team` DISABLE KEYS */;
INSERT INTO `user_team` VALUES (6,1),(37,1),(13,2),(5,2),(16,3),(28,3),(18,4),(32,4),(22,5),(14,5),(34,6),(20,6),(39,7),(31,7),(33,8),(35,8),(40,8),(7,9),(8,9),(25,9),(21,10),(24,10),(27,10),(9,11),(11,11),(15,11),(2,12),(3,12),(4,12),(10,12),(19,13),(26,13),(17,13),(12,13),(30,14),(36,14),(23,14),(29,14);
/*!40000 ALTER TABLE `user_team` ENABLE KEYS */;
UNLOCK TABLES;

--
-- Dumping routines for database 'tavern'
--
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-12-15 23:03:30