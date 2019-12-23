# install
```
npm install --save sequelize
npm install --save mysql2
```
### install Migration
```npm install --save sequelize-cli```
### install Sequelize structure
```npx sequelize-cli init```
### first Migration
```npx sequelize-cli migration:generate --name ชื่อไฟล์```
### run migration
```sequelize-cli db:migrate```
### undo migration
```sequelize-cli db:migrate:undo:all```
### genarate Model
```sequelize-auto -o "./models" -d booking_service -h 127.0.0.1 -u root -p 3306 -x root -e mysql```
### first Seed
```sequelize-cli seed:generate --name ชื่อไฟล์```
### run Seed
```sequelize-cli db:seed:all```
### undo Seed
```sequelize-cli db:seed:undo```