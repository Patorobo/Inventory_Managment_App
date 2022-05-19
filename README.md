# Inventory Management - Product Analysis System
## A Web app written with React and Strapi that helps in managing your Inventory and keeps track of your stock for better analysis and decision making

The program is built with react.js (A JavaScript libary for coding the frontend of the webapp) and Strapi (A database Application for managing the backend). For the Data analysis and Visualization,
TensorFlow.js was utilized to handle the machine learning and visualization aspects of the program.
### Below are the reasons why I chose the technologies and tools for the implementation of the application;
- React.JS is a well known library for JavaScript. It has gained alot of popularity which has made it possible for a lot of frameworks to have been developed over the years. This helps developers in enhancing their work and to maintain a very high standard for apps developed with react.js more than other javaScript libraries and frameworks. Due to it's popularity, it has a growing community in the internet because of how people share valuable coding experiences, ideas, solutions and most importantly answer various questions regarding bugs that programmers face daily. 

- The application was implemented with the a Content Management System (CMS - Strapi).
A content management system enables users to manage the creation and modification of content mainly via applications connected to the internet. Examples of some widely used CMS are Wordpress, Wiz, Joomla and Drupal. They are mainly meant to simplify the creation and management of content for most enterprise/business establishments and other web content managers for developing websites, blogs and landing pages easily. Strapi is a little bit different because it only manages the backend aspect of the application while allowing you to integrate your frontend application developed with any web programming language or framework of your choice. This gives developers the freedom to use any language or framework they wish to implement. You only concentrate on the frontend development while strapi streamlines your frontend to the self-managed backend. 
Official website of strapi is stated here: https://strapi.io/

- Tensorflow. js is a JavaScript framework developed by Google that enables developers to train and build machine learning (ML) models to be used in the browser. Developers also have the option of using pre-trained models in lieu of training their own.
https://medium.com/swlh/an-introduction-to-tensorflow-js-c2e837e70a01

### Follow below steps to start the application:

1. Copy both frontend (Inventory-frontend) and backend (Inventory-backend) into the same folder in your system.
2. Navigate to the backend folder through the command prompt or terminal in your system and enter the below command to install the modules and libraries for the backend:
```
cd Inventory-backend
npm install
# or
yarn install
```
3. While still inside the backend folder in the command prompt or terminal of your system, start the Strapi - backend application with the below command:
```
npm run develop
# or
yarn develop
```
You can access the backend Strapi admin dashboard via the localhost address: http://localhost:1337/admin/

4. Exit out of the backend folder and navigate into the frontend to install the libraries and modules for the frontend:
```
cd..
cd Inventory-frontend
npm install
# or
yarn install
```
5. While still inside the frontend folder in the command prompt or terminal of your system, start the React.js frontend application with the below command:
```
npm run start
# or
yarn start
```
The application opens automatically in your default browser. You can also access the web application through the localhost address: http://localhost:3000/
### About the inventory management analysis system
The wep app is a program that can be used to track the inventory of available stock as well as the processing of orders for re-stocking that is necessary to maintain the required levels of stock for each product in a retailing outfit such as supermarkets, malls, warehouses or supply chain in general. The main idea is to maintain the required levels of stock at all times by providing a visual reporting system based on current product events as well as historical information where users of the application can draw vital inferences to avoid both under-stocking and over-stocking which can drastically affect the smooth running of the business.

### Pages of the web app 
- Home
![01_Home](https://user-images.githubusercontent.com/55667443/167956431-1dfa8848-f282-4404-a9d0-62d851fda776.jpg)
This is the welcome page of the web site.

- Add Products
![02_AddProducts](https://user-images.githubusercontent.com/55667443/167956637-57bc071f-4ccd-4ad7-80db-9a8bfffdff14.jpg)
This is the place where a user enters a new product to the store. The required information needed are product name, tag, overstock and understock values for the product. Every product must have a tag which should be the same for all the product items in the store.

- Stock Reports
![03_StockReports](https://user-images.githubusercontent.com/55667443/167957380-8c8aeeb0-de9a-418a-b96b-27fee6a7538e.jpg)
The Stock-Reports page is the place where all products are listed. The product names are displayed with their tags and the total stock amount.
When a user clicks on any product in the list, it toggles between the display of all the inventory events in the stock history and the product name itself. 

- Enter Stock Events
![04_AddStockEvents](https://user-images.githubusercontent.com/55667443/167962108-43b0756f-4912-413a-87e9-02d87f3b518a.jpg)
The stock events for each products are added in the Add-Stock-Events page. The name of the product, tag no. the type of event (add or remove) and the quantity that was added or removed are entered and then updated here.

- Data analysis and Visualization
![06_ProductAnalysis](https://user-images.githubusercontent.com/55667443/169044690-a8d39242-dd3f-41f8-9724-835ea79edbc7.jpg)
![07_ProductVisualization](https://user-images.githubusercontent.com/55667443/169044720-587eead2-9282-451c-b647-33d0536bb38c.jpg)
This is where machine learning models are applied to the data generated from the app or other external dataset for making predictive or descriptive analysis to enhance the decision making process of the retail outlet or the users of the inventory system.

- About
![05_About](https://user-images.githubusercontent.com/55667443/167962699-019d9aa5-615c-4977-80e0-82efa6a07069.jpg)
This page displays the project information. Here you will find the project author, github repository as well as the course name and assignment details.



