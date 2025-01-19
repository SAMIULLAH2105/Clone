# Storm Machine
## Overview
Storm Machine is a full-stack project with a Node.js backend and a React frontend. This guide provides step-by-step instructions to set up and run the project.

## Prerequisites
Ensure you have the following installed on your system:
- **Node.js** (v14 or higher)
- **npm** (Node Package Manager)
- **MySQL** (with appropriate user credentials)

## Installation and Setup

### Clone the Repository
```bash
git clone "https://github.com/SAMIULLAH2105/Clone.git"
```
### Open the Project in an IDE and Install Dependencies
In the root folder, run:
```bash
npm install
```
## Backend Setup
### Navigate to Backend Folder
```bash
cd backend
```
### Install Dependencies
```bash
  npm install
```

### Configure Environment Variables
Create a .env file in the backend folder and add the following:
```bash
PORT=
MYSQL_HOST=
MYSQL_USER=root
MYSQL_PASSWORD=
MYSQL_DATABASE=
```
## Frontend Setup
### Navigate to Frontend Folder
```bash
cd frontend
```
### Install Dependencies
```bash
  npm install
```
## Running the Application
### Start Both Frontend and Backend
Navigate to the root folder and run:
```bash
npm run start
```
### Run Frontend Separately
Navigate to the frontend folder and run:
```bash
cd frontend
npm run dev
```

### Run Frontend Separately
Navigate to the backend folder and run:
```bash
cd backend
nodemon server.js
```
