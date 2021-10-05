"use strict";
/*
Copyright 2017 - 2017 Amazon.com, Inc. or its affiliates. All Rights Reserved.
Licensed under the Apache License, Version 2.0 (the "License"). You may not use this file except in compliance with the License. A copy of the License is located at
    http://aws.amazon.com/apache2.0/
or in the "license" file accompanying this file. This file is distributed on an "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
See the License for the specific language governing permissions and limitations under the License.
*/
exports.__esModule = true;
exports.app = void 0;
var express = require("express");
var bodyParser = require("body-parser");
var awsServerlessExpressMiddleware = require("aws-serverless-express/middleware");
// declare a new express app
exports.app = express();
exports.app.use(bodyParser.json());
exports.app.use(awsServerlessExpressMiddleware.eventContext());
// Enable CORS for all methods
exports.app.use(function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "*");
    next();
});
/**********************
 * Example get method *
 **********************/
exports.app.get("/item", function (req, res) {
    // Add your code here
    res.json({ success: "get call succeed!", url: req.url });
});
exports.app.get("/item/*", function (req, res) {
    // Add your code here
    res.json({ success: "get call succeed!", url: req.url });
});
/****************************
 * Example post method *
 ****************************/
exports.app.post("/item", function (req, res) {
    // Add your code here
    res.json({ success: "post call succeed!", url: req.url, body: req.body });
});
exports.app.post("/item/*", function (req, res) {
    // Add your code here
    res.json({ success: "post call succeed!", url: req.url, body: req.body });
});
/****************************
 * Example put method *
 ****************************/
exports.app.put("/item", function (req, res) {
    // Add your code here
    res.json({ success: "put call succeed!", url: req.url, body: req.body });
});
exports.app.put("/item/*", function (req, res) {
    // Add your code here
    res.json({ success: "put call succeed!", url: req.url, body: req.body });
});
/****************************
 * Example delete method *
 ****************************/
exports.app["delete"]("/item", function (req, res) {
    // Add your code here
    res.json({ success: "delete call succeed!", url: req.url });
});
exports.app["delete"]("/item/*", function (req, res) {
    // Add your code here
    res.json({ success: "delete call succeed!", url: req.url });
});
exports.app.listen(3000, function () {
    console.log("App started");
});
// Export the app object. When executing the application local this does nothing. However,
// to port it to AWS Lambda we will create a wrapper around that will load the app from
// this file
module.exports = exports.app;
