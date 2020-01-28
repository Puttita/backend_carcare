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

## API DOCS
```
POST:  http://localhost:3000/booking/web
body = {
         reservation: {
           reserv_id: 1,
           customer_name: 'testname',
           license: 'DE222',
           total_price: 160,
           reserv_date: await moment().format('YYYY-MM-DD'),
           start_date: await moment().format('HH:mm:ss'),
           end_date: await moment().add(30, 'minuts').format('HH:mm:ss'),
           reserv_status: 0,
           employee_id: 1,
           car_wash_id: 1,
         },
         booking_detail: [{
           booking_detail_id: 1,
           total: 200,
           time_duration: '00:30:00',
           clean_service_id: 1,
           reserv_id: 1
          }
         ]
      }

```
