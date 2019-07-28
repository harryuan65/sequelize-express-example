# sequelize-express-example

# How to use
## Install mysql server and turn it on
https://dev.mysql.com/downloads/mysql/

## Execute npm install in your folder
### Note
**This one should be installed globally**
`npm install sequelize-cli -g`

## Setup mysql root server
In this example:
root
123456


## Create you own model in models folder
(You can refer to my files for instance)

## Terminology
migration(a file): in which you specified how your table should be like and contraints
you can simply create it by hand 
or 
after creating your model files, execute the `sequelize migration:create` command 
and sequelize will generate migration files for you

## Execute the following command
```
# This will generate three folders: config, migration, seeders
sequelize init 

# This will generate migration file
sequelize migration:create --name create_XX_table 

# This will create read tables in database using the migration file
sequelize db:migrate 

# Optional: if you found something wrong, this will rollback the migration and drop the corresponding table
sequelize db:migrate:undo 
sequelize db:migrate:undo:all
```
