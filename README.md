<p align="center">
  <a href="http://nestjs.com/" target="blank"><img src="https://nestjs.com/img/logo-small.svg" width="120" alt="Nest Logo" /></a>
</p>
  <p align="center">A progressive <a href="http://nodejs.org" target="_blank">Node.js</a> framework for building efficient and scalable server-side applications.</p>
  
# Voucher Pool Microservice

## General description
The voucher pool microservice was developed using Nest Fretwork.



## Installation
1. Clone this repository
2. Create an empty database for this project in your database engine.
3. Configure the database connection in *env* file.
4. Copy **.env.example** file to **.env** and change the database connection configuration there too.
5. In a command line window go to the  project folder and install dependencies running `npm install`.
8. Run `npm run start:dev` in the command line to start Nest server. Now you can enter your web browser and go to **http://localhost:3000/api** to see it API Documentation.


### Home
The main page shows some basic statistics of the system (total vouchers, unused vouchers and used vouchers), and below them a list of the created vouchers displayed in a dynamic table that allows changing the number of results per page and run a quick search.

There’s also a blue *Add vouchers* button to create new vouchers.

### Add vouchers
To add new Voucher Code  
All fields are mandatory and after submitting them  a new voucher for each recipient is generated.

## API Endpoint
An API endpoint is provided to get a list of the valid vouchers for a given recipient and to redeem a voucher code. Since no authorization system is implemented, no API key or token are required.

The API endpoint will be available at **http://localhost:3000/api**  

### GET vouchers/{email_address}
If the provided email address is valid and corresponds to a registered recipient, a list of the valid vouchers for that recipient will be retrieved. The retrieved list include the special offer name, voucher code, discount and expiration date.

*Valid vouchers are those that hadn’t been used yet and are not expired.*

### POST voucher
This POST call uses 2 parameters: recipient email address and voucher code. If the email is valid and belongs to a registered recipient and the voucher is for a valid voucher for that same recipient, then it’s redeemed using the current date and the discount to be applied retrieved.

