# DF21-Web-Track Day 1

This is the repo for the Web track of Devfest India 2021. You can use this repo as your reference to check all the demos that got covered in first day of Web Track.

## Day 1 Session :microphone:

"Roadmap for Web developers and building your first website Details"

In this session, we will help you get kickstarted with web, starting from what is the current state of web in India, challenges and opportunities, Roadmap, Google's web technologies, getting started with e-commerce application. We will also see, how we can extend the functionalities of a web-app with Authentication, Database and Hosting using Firebase. You will also learn frequently asked interview questions.

## Targeted audience  :family: 

This repo is for those who want to kickstart their web development journey.

## How to use this repo? :technologist:

First of all checkout DF21-Web-Track-Day1 branch in your system. Once brnach is checked out, first need to create Firebase project.

- [Go To Firebase Console](https://console.firebase.google.com/u/0/?pli=1) & click Add project.
 > - To add Firebase resources to an existing Google Cloud project, enter its project name or select it from the dropdown menu.
 > - To create a new project, enter the desired project name. You can also optionally edit the project ID displayed below the project name.
 > - If prompted, review and accept the Firebase terms.
 > - Click Continue.
 > - (Optional) Set up Google Analytics for your project.
 > - Click Create project
 > - Click Continue.
 > - Click on Add Firebase to your web app 
 > - Enter App nickname
 > - Click on Register app
 > - You will get your firebaseConfig as Following
 >    ```javascript
 >    const firebaseConfig = {
 >      apiKey: "### FIREBASE API KEY ###",
 >      authDomain: "### FIREBASE AUTH DOMAIN ###",
 >      projectId: "### FIREBASE PROJECT ID ###",
 >      storageBucket: "### FIREBASE STORAGE BUCKET ###",
 >      messagingSenderId: "10728XXXXXXXXXX",
 >      appId: "1:10728XXXXXXXXXX:web:c22f0b8XXXXXXXXXXXXXX",
 >    };
 >    ``` 
 > - Open public/js/firebase/firebase.js file and paste above config there.
- Install Firebse Tools
  ``` 
  npm install -g firebase-tools 
  ```
- Once installed, run following command and authorize it with your gmail id which you used to login to Firebase console in first step.
  ``` 
  firebase login
  ```
- Once authorized go to app code and run the following command
  ``` 
  firebase serve
  ```
It will give the URL http://localhost:5000/ from where you can run the application. 

# Resources
