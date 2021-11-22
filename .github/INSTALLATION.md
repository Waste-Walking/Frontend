# Installation

This documentationd describes the process to get a working development environment.

# Prerequisites

In order to get a working local development environment, the following tools are necessary:

* Text Editor
* MySQL Database (XAMPP can be used)
* Node.js 12.04 or higher

## Backend

* Create a MySQL database
* Clone the Backend repository
* Run ``` npm install ``` in the root directory
* Copy ``` config.sample.yml ``` and rename it to ``` config.yml ```
* Open the configuration file and enter the MySQL database credentials
* Run ``` npm run start ``` to successfully start the Backend

## Frontend

* Clone the Frontend repository
* Run ``` npm install ``` in the root directory
* Open ``` .env ``` and change the ``` NEXT_PUBLIC_API_BASE_URL ``` to where the backend can be reached
* Run ``` npm run dev ``` to successfully start the Frontend