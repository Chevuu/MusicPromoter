# Unpublished Songs Marketplace Application

## Overview
This application serves as a marketplace for selling unpublished movie songs. Users can create accounts, log in, listen to 5-second song samples, and purchase their favorites. The application ensures secure transactions and data handling with Stripe integration and cutting-edge cryptography.

### Design
Here's the first idea of the design
![image](https://github.com/Chevuu/MusicPromoter/assets/81182493/7c0bee70-5840-4e0e-a3dc-5f9e65f8a234)


### Client Application
- **Technology**: React.js
- **Usage**: As a beginner in React.js, please consider the implementation with caution. The client application is run locally on `localhost:3000`.
- **Running Client**:
```
cd client
npm start
```
- **Featurest**: The client stores song teasers in memory and allows users to sample and purchase songs.

### Server Application
- **Technology**: Spring Boot with a PostgreSQL database.
- **Functionality**: Handles user details, purchase history, and full song data.
- **Running Server**:
```
cd server
mvn clean install
java -jar ./target/server-0.0.1-SNAPSHOT.jar
```
## Development Status
The application is in active development. New features, payment processing, and deployment strategies are forthcoming.

## Instructions for Developers
1. Clone the Repository: Obtain the latest version of the code.
2. Set up the Client: Navigate to the client directory and start the application.
3. Set up the Server: Ensure the server is correctly handling backend tasks.

## Note
As the application is still in the development phase, expect ongoing changes and enhancements. This will be my first time deploying a full-stack application.

### Disclaimer
The **React.js** techniques used in the client are from a beginner perspective and may not adhere to industry standards. The server-side implementation is more robust, reflecting greater experience with backend technologies.

### Future Plans
- Addition of full songs.
- Integration of payment system.
- Deployment of the application.
- Continuous addition of features and improvements.
