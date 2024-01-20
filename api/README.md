# Find My Home - API
Welcome to the API directory of Find My Home, a real estate marketplace built with the MERN stack. 
- This directory contains the backend application, developed using `Node.js` and `Express.js` for handling server-side logic. 
- Below, you'll find information on the project structure, the key components such as *controllers*, *models*, *routes*, and *utilities*, as well as instructions for setting up the server.

## Project Structure
The API directory follows a well-organized structure to facilitate development and maintenance. Key directories include:

- **controllers:** Manages the application's logic for different aspects of the app, including authentication, listing CRUD operations, and user operations.

- **models:** Data models define the structure of the data stored in MongoDB,
The listings and users using MongoDB schemas.

- **routes:** Routes define the API endpoints and connect them to the corresponding controller functions. 
Handles routing for authentication, listing operations, and user operations.

- **utils:** Utilities contain helper functions used throughout the API. Contains utility functions such as error handling and token verification.

## Setting up the Server
The [`index.js`](https://github.com/Gichbuoy/Real-Estate-Marketplace/blob/main/api/index.js) file sets up the Express server, connects to MongoDB, and defines routes for authentication, listing operations, and user operations. Follow the steps in the Setting up the Server guide to get the API server running.

### Installation
To set up the api directory and run the server, follow these steps:

1. Navigate to the api directory:
```
cd Real-Estate-Marketplace/api
```

2. Install the dependencies:
```
npm install
```

3. Run the application:
```
npm run dev
```

4. Configure MongoDB:

Make sure MongoDB is installed and running on your machine.

Create a .env file in the api directory and set the MONGODB_URI variable to your MongoDB connection string: *Eg*
```
MONGODB_URI=mongodb://localhost:3000/find-my-home
```

I used [Insomnia](https://insomnia.rest/), an API testing platform for designing and testing the APIs

`SignIn`

![SignIn](https://github.com/Gichbuoy/Real-Estate-Marketplace/blob/main/screenshots/api-signin.png)

`SignUp`

![SignUp](https://github.com/Gichbuoy/Real-Estate-Marketplace/blob/main/screenshots/api-signup.png)

`Update User`

![UpdateUser](https://github.com/Gichbuoy/Real-Estate-Marketplace/blob/main/screenshots/api-updateuser.png)

`Delete User`

![DeleteUser](https://github.com/Gichbuoy/Real-Estate-Marketplace/blob/main/screenshots/api-delete.png)

`Create Listing`

![CreateListing](https://github.com/Gichbuoy/Real-Estate-Marketplace/blob/main/screenshots/api-createlisting.png)

`Delete Listing`

![DeleteListing](https://github.com/Gichbuoy/Real-Estate-Marketplace/blob/main/screenshots/api-deletelisting.png)

`Update Listing`

![updateListing](https://github.com/Gichbuoy/Real-Estate-Marketplace/blob/main/screenshots/api-updatelisting.png)

`Get All Listings`

![GetListings](https://github.com/Gichbuoy/Real-Estate-Marketplace/blob/main/screenshots/api-getlisting.png)

`Get Listing by Id`

![Getlisting](https://github.com/Gichbuoy/Real-Estate-Marketplace/blob/main/screenshots/api-getlistingId.png)

`Search Term`

![SearchTerm](https://github.com/Gichbuoy/Real-Estate-Marketplace/blob/main/screenshots/api-searchterm.png)


