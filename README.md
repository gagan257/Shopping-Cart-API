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

