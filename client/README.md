# Find My Home - Client
Welcome to the client directory of Find My Home, real estate marketplace built with the MERN stack. This directory contains the frontend application, developed using React and Redux Toolkit for state management. 
- Below, you'll find information on setting up the client, understanding the project structure, and exploring the key features implemented on the frontend.

## Installation
To set up the client directory and run the frontend application, follow these steps:

1. Navigate to the client directory:
```
cd client
```

2. Install the dependencies:
```
npm install
```

3. Run the application:
```
npm run dev
```

## Project Structure
The client directory follows a well-organized structure to facilitate development and maintenance. Key directories include:

- **src:** Contains the source code of the React application.
- **components:** Houses reusable React components used throughout the application.
- **Pages:** Different routes for the pages of the application

- **redux:** Organizes Redux slices and related files for managing states.
- **api:** Defines functions for interacting with the backend API.


## Technologies Used

`Frontend`:

- React
- Redux Toolkit for state management
- JWT for authentication
- Firebase and Google OAuth for secure user access



## Key Features
Explore the frontend implementation of key features such as authentication, property listings, image uploads.

1. Secure User Experience:

- Specific pages, such as the profile page is protected on both the client and server side. Users can update their info on the profile page.

2. Flexibility:

- User has the ability to create new property listing, with the flexibility of adding discounted prices on properties and uploading upto 6 imagesper listing.

- Users is able to adjust number of images associated with their listing even after upload.

- Listng page features an image slider && convinient contact options for potential clients or buyers.

3. User-friendly Features:

- Enhance the user experience with image uploads for property listings and intuitive listing management.

4. Advanced Search Functionality:

- This feature enables users to search by title, limit the search results and apply sorting options, to help users find the properties they're looking for.

5. Authentication Functionality:

- Users can signup and login to the application using their email and password, through the use of JWT.

6. Redux Toolkit:

- For better state management of global states.
