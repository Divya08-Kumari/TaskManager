First, create the environment variables file .env in the server folder. The .env file contains the following environment variables:

MONGODB_URI = your MongoDB URL
JWT_SECRET = any secret key - must be secured
PORT = 8800 or any port number
NODE_ENV = development
 

Set Up MongoDB:
Setting up MongoDB involves a few steps:

Visit MongoDB Atlas Website

Go to the MongoDB Atlas website: https://www.mongodb.com/cloud/atlas.
Create an Account

Log in to your MongoDB Atlas account.

Create a New Cluster

Choose a Cloud Provider and Region

Configure Cluster Settings

Create Cluster

Wait for Cluster to Deploy

Create Database User

Set Up IP Whitelist

Connect to Cluster

Configure Your Application

Test the Connection

Create a new database and configure the .env file with the MongoDB connection URL.

Steps to run server
Open the project in any editor of choice.
Navigate into the server directory cd server.
Run npm i or npm install to install the packages.
Run npm start to start the server.
If configured correctly, you should see a message indicating that the server is running successfully and Database Connected.

 

Client Side Setup
Environment variables
First, create the environment variables file .env in the client folder. The .env file contains the following environment variables:

VITE_APP_BASE_URL = http://localhost:8800 #Note: Change the port 8800 to your port number.
VITE_APP_FIREBASE_API_KEY = Firebase api key
Steps to run client
Navigate into the client directory cd client.
Run npm i or npm install to install the packages.
Run npm start to run the app on http://localhost:3000.
Open http://localhost:3000 to view it in your browser.

