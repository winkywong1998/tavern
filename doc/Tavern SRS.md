<center><h1>Software Requirement Specification</h1></center>

## Problem Statement

People with no experience or less experience usually have trouble and confusion getting understanding about how to find a job and which company should be looked for. Specifically, activities like giving mock interviews, reviewing resumes or sharing interview experience will be extremely valuable but hard to access sometimes, especially discuss with people with similar background.

## Potential Clients

* *Students who are trying to find a job in position like Software Development Engineer.*

* *Students who are trying to build a network.*

## Proposed Solution

The software provides a matching system that can match students in a group based on the information they provided. In this case, people from different locations can communicate to each other, exchange information, and improve together. This matching system will allow users to form a group of three(or two) to discuss their resume or interview skill. The user can send request to join a group forming recurrently. The user can not join multiple group though. The group will only exist for a while.

In the matching system, each individual in one matching process will have multiple attributes which will be assigned to different weights. Note that there will be attributes that is combination of multiple original attribute. Based on those attributes, individuals will have a total score for each other. The score for the group should be the global optimum in that matching round. In this case, the groups will be formed, and the system will make sure that the members of a group will have the highest similar interests and technical backgrounds.

The software provides a message board for the user to share information or leave comments on it. The comments are allowed to post anonymously for personal information protection.

The software provides a list of company, it allows user to rate each company according to their interview feedback, working style, etc.
They can also review the scores about the company for their potential future selection. Also, posts on the message board can be assigned to a specific company tag so that users can find posts of related topics much easier.

## Functional Requirements
### Must have
User:

* As a user, I want to record my name, email address and phone number so that I can create an account.

Admin:

* As an administrator, I want to supervise volunteers so that I can assign suitable works to them.

* As an administrator, I want to review meeting applications so that only meetings of compliance can be held and visible to the public.

* As an administrator, I want to set up public meetings so that teams of interest can register to attend.

* As an administrator, I want to be able to ban accounts so that accounts violating regulations can be prohibited from enjoying services.

* As an administrator, I want to be able to remove posts so that posts violating regulations have no influence on the community environment.

* As an administrator, I want to review the request of add one company to the company list so that the company list will be more complete.

Participant:

* As a participant, I want to be a member of a team so that I can register and schedule a meeting.

* As a participant, I want to be able to edit my personal and professional information.

* As a participant, I want to have a chance to become a volunteer so that I can assist the process of a meeting activity.

* As a participant, I want to form a team with others having similar backgrounds or the same goal so that we can help each other to get the ideal job offer.

* As a participant, I want to share something during job hunting so that others can gather information from my experience.

* As a participant, I want to follow topics on boards so that I can get useful and interesting information
  conveniently.

* As a participant, I want to rate each company so that other users can refer the scores.

* As a participant, I want to request add a company in case it not listed so that the company list will be more completed.

Team:

* As a team, we want to schedule and register for meetings so that we can have face to face discussions on topics we selected.

* As a team, we want to participate in public meetings in which we are interested.

Volunteer:

* As a volunteer, I want to choose a scheduled date for a voluntary activity of a meeting.

* As a volunteer, I want to be able to help the meeting to be held smoothly by spreading study sheets, discussion topics, and resources.

* As a volunteer, I want to maintain the order of the meeting and manage the behaviors of participants.

### Nice to have

Feedback:

* As a participant, I want to share my feedback on previous meetings so that others can view the quality of that meeting.

* As an admin, I want to be able to remove feedback so that feedback violating regulations have no influence on the community environment.

* As a participant, I want to share my feedback on others’ posts.

Message:

* As a participant, I want to send/receive messages to/from others so that I can network with them and talk about potential opportunities.

Anonymous mode:

* As a participant, I want to hide personal information when posting sensitive topics on boards so that others can’t know who I am.

### Non-functional Requirements:

Fancy and interactive user interface

## Software Architecture & Technology Stack
* This will be a Web application.
* Architecture: Client-Server Architecture
* Database: MySQL: \
  MySQL is ideal for storing application data, specifically web application data. Additionally, as the web application needs to store data across multiple tables, a relational database is in demand. Hence, the highly developed relational database, Mysql, is a wonderful choice for our project.
* Backend: Java, SpringBoot, MyBatis:
1. SpringBoot is widely used in development of web applications these days. It is productive, fast, secure and supportive with impressive performance. Spring Boot helps developers build applications with ease and with far less toil. We can take advantage of embedded web servers, auto-configuration, and “fat jars” to build project structure quickly. Besides, there are many dev tools we can utilize to help build functions and interact with database.
2. We choose MyBatis to help manage database. MyBatis is an open source persistence framework which simplifies the implementation of database access in Java applications. We can customize SQL and create advanced mappings to better present our data. It works perfectly with Spring Boot as well.
* Frontend: JavaScript, React, Redux:
1. React JS is a popular choice for frontend of web applications. It helps create dynamic and interactive web contents. As an interpreted language, Javascript reduces the time required to connect to the server and thus speeds up execution of programs. It can rewrite and update contents on a web page without requiring to reload or refresh the page.
2. React JS is mature, flexible and powerful with Redux and extensive toolset. In particular, Redux offers a single store object to handle all app data, making underlying data management manipulations simple and hassle-free.
3. React JS is easy to learn as we all have experience with JavaScript. There are many tutorials and examples online that can help us learn and catch up quickly.
* Deploy: AWS: \
AWS is the world's most comprehensive and broadly adopted cloud platform. It has great flexibility as it enables customers to select the operating system, programming language, web application platform, database, and other services. It eases the migration process for existing applications while preserving options for building new solutions with the virtual environment it provided.

## Similar Apps

There are few similar applications like LinkedIn and Reddit. LinkedIn is meant to build connections between people with similar skills and professional interests, while Reddit is a forum that can let users discuss different kinds of topics freely. The purpose of our application is not only to realize the joint functions of both apps like connecting and chatting with other users, showing users’ own profiles for networking, etc., but also came up with two innovative functions, a matching system and a company information system.

The matching system is meant to matching people for networking and skill improvement. Meanwhile, the company information system provides company information and rating for users. These two modules are our major innovations that our proposed application is different from the other similar products. 
