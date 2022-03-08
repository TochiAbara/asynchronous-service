const express = require('express');
const app = express();
const AWS = require('aws-sdk');
require('dotenv').config();
const PORT = '3000'

const generateRandomNumber = (min, max) => {
   return Math.floor(Math.random() * (max - min) + min);
}

const  sendOTP = () => {
   const mobileNo = '+919931021948';
   const OTP = generateRandomNumber(1000,9999);
   
   var params = {
   Message: "Welcome! your mobile verification code is: " + OTP +"    Mobile Number is:" +mobileNo,
     PhoneNumber: mobileNo,
     };
     return new AWS.SNS({apiVersion: "2022–03-09"}).publish(params).promise()
.then(message => {
console.log("OTP SEND SUCCESS"+message);
})
.catch(err => {
console.log("Error "+err)
return err;});
}
sendOTP();

