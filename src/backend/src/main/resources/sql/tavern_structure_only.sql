/*
 Navicat Premium Data Transfer

 Source Server         : 11
 Source Server Type    : MySQL
 Source Server Version : 80021
 Source Host           : localhost:3306
 Source Schema         : tavern

 Target Server Type    : MySQL
 Target Server Version : 80021
 File Encoding         : 65001

 Date: 02/11/2022 21:12:29
*/

SET NAMES utf8mb4;
SET FOREIGN_KEY_CHECKS = 0;

-- ----------------------------
-- Table structure for company
-- ----------------------------
DROP TABLE IF EXISTS `company`;
CREATE TABLE `company` (
  `id` int NOT NULL AUTO_INCREMENT,
  `name` varchar(50) NOT NULL,
  `score` double DEFAULT '0',
  `num_review` int DEFAULT '0',
  `num_post` int DEFAULT '0',
  `time_latest_post` timestamp NULL DEFAULT NULL,
  `logo_url` varchar(100) DEFAULT NULL,
  `published` tinyint NOT NULL DEFAULT '0',
  PRIMARY KEY (`id`),
  UNIQUE KEY `name_UNIQUE` (`name`)
) ENGINE=InnoDB AUTO_INCREMENT=9 DEFAULT CHARSET=utf32;

-- ----------------------------
-- Table structure for meeting
-- ----------------------------
DROP TABLE IF EXISTS `meeting`;
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

-- ----------------------------
-- Table structure for meeting_team
-- ----------------------------
DROP TABLE IF EXISTS `meeting_team`;
CREATE TABLE `meeting_team` (
  `meetingId` int NOT NULL,
  `teamId` int NOT NULL,
  KEY `meetingId_fk` (`meetingId`),
  KEY `teamId_fk` (`teamId`),
  CONSTRAINT `meetingId_fk` FOREIGN KEY (`meetingId`) REFERENCES `meeting` (`id`),
  CONSTRAINT `teamId_fk` FOREIGN KEY (`teamId`) REFERENCES `team` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Table structure for meeting_user
-- ----------------------------
DROP TABLE IF EXISTS `meeting_user`;
CREATE TABLE `meeting_user` (
  `meetingId` int NOT NULL,
  `userId` int NOT NULL,
  KEY `meetingId_fk1` (`meetingId`),
  KEY `userId_fk` (`userId`),
  CONSTRAINT `meetingId_fk1` FOREIGN KEY (`meetingId`) REFERENCES `meeting` (`id`),
  CONSTRAINT `userId_fk` FOREIGN KEY (`userId`) REFERENCES `user` (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Table structure for post
-- ----------------------------
DROP TABLE IF EXISTS `post`;
CREATE TABLE `post` (
  `id` int NOT NULL AUTO_INCREMENT,
  `title` varchar(100) NOT NULL,
  `content` text NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `companyId` int DEFAULT NULL,
  `creatorId` int NOT NULL,
  PRIMARY KEY (`id`),
  KEY `companyId_idx` (`companyId`),
  KEY `creatorId_idx` (`creatorId`),
  CONSTRAINT `companyId` FOREIGN KEY (`companyId`) REFERENCES `company` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=41 DEFAULT CHARSET=utf32;

-- ----------------------------
-- Table structure for team
-- ----------------------------
DROP TABLE IF EXISTS `team`;
CREATE TABLE `team` (
  `id` int NOT NULL,
  `num_member` int NOT NULL,
  `participants` varchar(300) DEFAULT NULL,
  `active` tinyint DEFAULT '1',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Table structure for user
-- ----------------------------
DROP TABLE IF EXISTS `user`;
CREATE TABLE `user` (
  `id` int NOT NULL AUTO_INCREMENT,
  `password` varchar(100) NOT NULL,
  `fName` varchar(100) NOT NULL,
  `lName` varchar(100) NOT NULL,
  `email` varchar(100) NOT NULL,
  `uType` varchar(100) NOT NULL,
  `level` varchar(100) DEFAULT NULL,
  `numOfExp` int DEFAULT NULL,
  `major` varchar(100) DEFAULT NULL,
  `degree` int DEFAULT NULL,
  `rOrI` int DEFAULT NULL,
  `timeZone` int DEFAULT NULL,
  `school` int DEFAULT NULL,
  `year` int DEFAULT NULL,
  `teamId` int DEFAULT NULL,
  `poolId` tinyint DEFAULT '0',
  PRIMARY KEY (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=42 DEFAULT CHARSET=utf32;

-- ----------------------------
-- Table structure for user_team
-- ----------------------------
DROP TABLE IF EXISTS `user_team`;
CREATE TABLE `user_team` (
  `userId` int NOT NULL,
  `teamId` int NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf32;

-- ----------------------------
-- Triggers structure for table post
-- ----------------------------
DROP TRIGGER IF EXISTS `post_insert_trigger`;
delimiter ;;
CREATE TRIGGER `post_insert_trigger` AFTER INSERT ON `post` FOR EACH ROW begin
   IF New.companyId is not null
   THEN
      UPDATE tavern.company
      SET num_post = num_post+1,
          time_latest_post = NEW.`time`
      WHERE id = NEW.companyId;
   END IF;
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table post
-- ----------------------------
DROP TRIGGER IF EXISTS `post_update_trigger`;
delimiter ;;
CREATE TRIGGER `post_update_trigger` AFTER UPDATE ON `post` FOR EACH ROW begin
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
END
;;
delimiter ;

-- ----------------------------
-- Triggers structure for table post
-- ----------------------------
DROP TRIGGER IF EXISTS `post_delete_trigger`;
delimiter ;;
CREATE TRIGGER `post_delete_trigger` AFTER DELETE ON `post` FOR EACH ROW begin
   IF OLD.companyId is not null
   THEN
      UPDATE tavern.company
      SET num_post = num_post-1,
          time_latest_post = (select max(time) from post where companyId = OLD.companyId)
      WHERE id = OLD.companyId;
   END IF;
END
;;
delimiter ;

SET FOREIGN_KEY_CHECKS = 1;
