# Shopping Cart API


## INSTALL ALL REQUIRED MODULES BEFORE STARTING

``` shell
    $ npm init
    $ npm install node
    $ npm install express
    $ npm install hbs
    $ npm install mysql2
    $ npm install sequelize
```
          ----------OR-----------

```shell
    $ npm init
    $ npm install node express hbs mysql2 sequelize   #Installing all modules together
```

## Structure

``` shell
 Front-End ───           db.js      # database blueprint
  ^           |           |
  |           V           |
 JQuery <-- Server <--> Routes
                        └───api
                            └─── index.js       # for products and users
                            └─── products.js    # handles and exports product data in database
                            └─── users.js       # handles and exports user data in database 
```

## How to Use

1. **Connect the database**

2. **Start the server** 
    ```shell
    $ node server.js
    ```
3. **Go to http://localhost:2345** `List of products will be displayed that are present in Database via JQuery`

4. **Add a product** `via` **http://localhost:2345/add_product**
