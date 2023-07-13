
# Fazt Zhare 
File Upload and Short Link Generation Platform

```href
https://farmart-assign.web.app/
```

*API*: ```https://file-share-api-cmfs.onrender.com```




## Features

Frontend features:
- Upload any file (size < 10Mb & specified formats only) 
- Short Link generation for easy share
- Search for a given short Link
- Cross platform

Backend features:
- Upload any file (size < 10Mb & specified formats only), robust error handling
- Short Link generation & collision avaoidance
- User authentication & file management with JWT tokens




## Tech Stack

**Client:** React, Ant Design, Axios

**Server:** Node, Express, MongoDB, JWT

**Cloud:** Google Firebase





## Installation - Front-end
1. Clone the repository:
```bash
  git clone https://github.com/Shivam25092001/Fazt-Zhare-frontend.git
```

2. Navigate to the project directory:
```bash
  cd Fazt-Zhare-frontend
```

3. Install dependencies using npm:
```bash
  npm install
```

4. Change base Url in file **`API_BASE_URL.js`** to `http://localhost:5000`


## Installation - Backend

#### Prerequisites
- Node.js (v12 or above)
- NPM (Node Package Manager)
- MongoDB (Make sure MongoDB is installed and running locally or provide a remote MongoDB connection URL)
- Firebase Admin credentials (You need to set up a Firebase project and obtain the service account credentials (json file))

1. Clone the repository:
```bash
  git clone https://github.com/Shivam25092001/FarMart-assign.git
```


2. Navigate to the project directory:
```bash
  cd FarMart-assign
  cd server
```

3. Install dependencies using npm:
```bash
  npm install
```


## Configuration

1. Create a .env file in the server directory of the project.
Add the following environment variables to the .env file:

`PORT = 5000`

`DB_URL = 'Your mondogb url '`

`COOKIE_EXPIRY = <Number>`

`JWT_SECRET = Your JWT Secret Key`


2. Set up a Firebase Project:

- Go to the Firebase Console (https://console.firebase.google.com/).
- Click on "Add Project" or select an existing project.
- Follow the instructions to set up your project.

3. Enable Firebase Admin SDK:

- Go to the Firebase Console.
- Select your project.
- Navigate to the "Project Settings".
- Go to the "Service Accounts" tab.
- Click on "Generate New Private Key" to download the service account credentials file (JSON format). This file contains the necessary credentials to access Firebase services programmatically.
Place the credentials file:


4. Move the credentials file to the backend project directory (where the Node.js server code resides).




## FAQ

#### How to Use:

1. Open the application
2. If you're a registered user, authenticate yourself. If not, you have the privilege to upload files publicly.
3. Choose your preferred file from your device.
4. Upload the file.
5. A short link will be generated and displayed to you shortly that cana be shared with anyounr.
6. You can also view the generated download link and use it.
7. As an authenticated user, you can manage your files.

#### How the short URLs are Generated:

A short URL is generated by hashing the upload time and public URL together via MD5 (Message Digest Algorithm).


## API Reference

#### POSTMAN
```
https://crimson-astronaut-514662.postman.co/workspace/farMart-assign~b727a323-f5e0-4e42-918c-a3d874443d2c/collection/28219607-d0fbd2a9-56aa-48a4-92b8-a2db022bde5e?action=share&creator=28219607
```


```
https://crimson-astronaut-514662.postman.co/workspace/farMart-assign~b727a323-f5e0-4e42-918c-a3d874443d2c/collection/28219607-bd7aac99-7ab7-4734-b706-315b3395d6e1?action=share&creator=28219607
```

```
https://crimson-astronaut-514662.postman.co/workspace/farMart-assign~b727a323-f5e0-4e42-918c-a3d874443d2c/collection/28219607-17bc0e79-7a7c-4508-84f1-f822635debe3?action=share&creator=28219607
```


*These postman files are also available in .json format in the backend directory for easy reference*</sub></sup>





## Documentation


### Implementation choices:
#### Backend Framework:

- Node.js and Express: Chosen for their lightweight and efficient nature, allowing for quick development of RESTful APIs. Express provides a robust set of features, middleware support, and a large ecosystem of extensions.
- MongoDB and Mongoose: Utilized as the database technology to store file records and user information. MongoDB's flexible document-based storage model and Mongoose's object data modeling (ODM) provide easy integration with Node.js.

#### Short URL Generation:

- MD5 Hashing Algorithm: Implemented MD5 hashing algorithm to generate short URLs based on the timestamp of file upload and the public URL. MD5 provides a unique and deterministic hash value for a given input, ensuring consistent and collision-resistant short URL generation.

#### API Security:

- JWT Authentication: Implemented (JWT) for API authentication. Users receive a JWT upon successful login, which is sent in the request headers for subsequent API calls. The backend verifies the token's integrity and authenticity to authenticate and authorize user actions.

#### File Storage:

- Firebase Storage: Leveraged Firebase Storage to store and manage uploaded files securely. Firebase Storage offers scalable and reliable cloud storage with easy integration, access control rules, and compatibility with Firebase Authentication for authorization.



### Challeneges faced:

- Hosting frontend on remote servers led to routing issues. Isuue with BrowserRouter by react-router-dom on most of the hosting services like render, netlify, vercel. **Resolved** Firebase static file deployment resolved the problem. 

- Generating unique and collision-resistant short URLs with MD5 hashing was a concern. **Resolved** by implementing the MD5 hashing algorithm and using a combination of file properties, such as timestamp and public URL, unique short URLs were generated. 


### Improvements I would have made with more time:
- Implemented more robust technique for short link generation to make it scalable for multi-server system. Short Link generation on multiple servers for same file at the same time should generate unique URLs (prevent collision).

- Implemented `node-cron` service to automatically remove expired files as:
```javascript
cron.schedule('0 0 * * *', () => {
  // Perform the logic to remove expired files from Firebase
  const removal_draft = File.find({expires: {$lt : currentDate}});
  
  removal_draft.forEach(file => admin.storage().bucket().file(file.data().fileName).delete());

});

```

## 🔗 Links
[![front-end repo](https://github.com/Shivam25092001/Fazt-Zhare-frontend)](https://github.com/Shivam25092001/Fazt-Zhare-frontend)
[![back-end repo](https://github.com/Shivam25092001/FarMart-assign)](https://github.com/Shivam25092001/FarMart-assign)

