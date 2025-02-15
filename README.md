# University Web Platform

A platform designed to enhance university services for students, professors, and the administration.

## Overview

This project is a university web platform aimed at modernizing the educational experience by providing several key services:
- **Document Sharing:** Allowing students to share and access academic resources.
- **Announcement System:** Enabling professors and administrators to post important updates.
- **Letter Request Service:** Streamlining the process for students to request recommendation letters.
- **Blogging Space:** Facilitating a community where both students and professors can share articles and insights.

## Technologies

- **Frontend:** React.js, Material UI, Tailwind CSS
- **Backend:** Java (Spring Boot, Spring Security, Spring Data JPA)
- **Database:** PostgreSQL
- **Architecture:** Microservices
- **Additional Tools:** JWT for authentication, RabbitMQ for messaging, Eureka Server for service discovery, Sleuth Zipkin for monitoring

## Features

### 1. Authentication & Authorization
- Secure user login using JSON Web Tokens (JWT)
- Role-based access control (Student, Professor, Admin)

![signUp Page](screen_pfe/Login/4.png)
![Login Page](screen_pfe/Login/3.png)


### 2. Document Sharing
- Upload, download, and manage academic documents
- Comment, like, and interact with shared documents

![document Page](screen_pfe/posts/9.png)
![document Page](screen_pfe/posts/8.png)

### 3. Announcement System
- Professors and administrators can post announcements and notifications
- Real-time updates ensure students are always informed

![annaouncement Page](screen_pfe/annonce/1.png)

### 4. Letter Request Service
- Students can request recommendation letters online
- Professors can review, approve, and digitally send letters

![Letter Page](screen_pfe/letter/last2.png)

### 5. Blogging Space
- Create and share articles with a vibrant community
- Supports multimedia content such as images and videos

![blog Page](screen_pfe/blog/10.png)
![blogde create Page](screen_pfe/blog/2.png)

## Architecture & Engineering Decisions

The project utilizes a microservices architecture to ensure scalability, flexibility, and ease of maintenance. Key engineering decisions include:
- **Microservices:** Allowing independent development and deployment of each service.
- **Spring Boot:** Chosen for robust and scalable backend development.
- **React.js:** Used for a responsive and modular frontend.
- **JWT:** Provides secure and portable authentication.
- **RabbitMQ:** Enables asynchronous communication between services.

![blogde create Page](screen_pfe/architecture_diagram.png)

