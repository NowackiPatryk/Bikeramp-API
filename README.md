## What is this app? 
This is api that helps bike couriers track their deliveries and check weekly and monthly stats about them.

# API Docs
**GET /api/trip** <br/><br/>
returns list of trips in following format: <br/><br/>
**id**: number | id of delievery<br/>
**start_address**: string | (for example: 'Plac Europejski 2, Warszawa, Polska') - address where courier starts delivery<br/>
**destination_address**: string | (for example: 'Plac Europejski 2, Warszawa, Polska') - address where courier ends delivery<br/>
**distance**: number | distance between start_address and destination_address in KM<br/>
**price**: number | value of delivery in PLN<br/>
**date**: string | yyyy-mm-dd format<br/>
<br/>
Query params: <br/><br/>
**start_address** in format 'Plac Europejski 2, Warszawa, Polska'<br/>
**destination_address** in format 'Plac Europejski 2, Warszawa, Polska'<br/>
**price**: number<br/>
**date**: string in yyyy-mm-dd format<br/>
<br/>

**POST /api/trip** <br/><br/>
Creates new trip in database <br/><br/>
Required body parameters: <br/>
* start_address<br/>
* destination_address<br/>
* price<br/>
<br/>

**GET /api/stats/weekly** <br/><br/>
returns weekly stats about deliveries.<br/>
Example reponse: <br/>
<pre>
{
  "total_distance": "40km",
  "total_price":    "49.75PLN"
} 
</pre>
<br/>

**GET /api/stats/monthly** <br/><br/>
returns monthly stats about deliveries from each day.<br/>
Example reponse: <br/>
<pre>
[
  {
    "day": "July, 4th",
    "total_distance": "12km",
    "avg_ride": "4km",
    "avg_price": "22.75PLN"
  },
  {
    "day": "July, 5th",
    "total_distance": "3km",
    "avg_ride": "3km",
    "avg_price": "15.50PLN"
  }
]
</pre>
<br/>

## Imporant
Remember about filling .env with your own data following .env.example pattern. 
API uses Nominatim API which can be found in this link: https://nominatim.org/release-docs/develop/api/Overview/

## Installation

```bash
$ npm install
```

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

## Test

```bash
# unit tests
$ npm run test

# e2e tests
$ npm run test:e2e

# test coverage
$ npm run test:cov
```

## Support

Nest is an MIT-licensed open source project. It can grow thanks to the sponsors and support by the amazing backers. If you'd like to join them, please [read more here](https://docs.nestjs.com/support).

## Stay in touch

- Author - [Kamil Myśliwiec](https://kamilmysliwiec.com)
- Website - [https://nestjs.com](https://nestjs.com/)
- Twitter - [@nestframework](https://twitter.com/nestframework)

## License

Nest is [MIT licensed](LICENSE).
