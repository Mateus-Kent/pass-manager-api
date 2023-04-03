  <img  src="./.github/imgs/pass-manager-api.jpg" >

# Pass Manager API

This repository contains the source code for a password manager API built using [Node.js](https://nodejs.org/en/), [Express.js](https://expressjs.com/pt-br/), and [Prisma](https://www.prisma.io/) with [PostgreSQL](https://www.postgresql.org/). This API allows users to manage their passwords securely by encrypting and storing them in a database.

## How to Use

### Prerequisites

To use this API, you must have `Node.js` and `PostgreSQL` installed on your machine or use our docker image in the  `docker-compose.yml`.

### Installation

To install this API, follow these steps:

1. Clone the repository:

```bash
git clone https://github.com/Mateus-Kent/pass-manager-api.git
```

2. Navigate to the repository directory:

```bash
cd pass-manager-api
```

3. Install the dependencies:
```bash
npm install
```
### Running the API

To run the API, follow these steps:

1. create the environment variables in a new file called `.env` following the instructions in the `.env.example` file

2. Run the `docker-compose.yml` to create the database image
```bash
docker compose up -d
```
3. Run prisma migrations
```bash
npx prisma migrate dev
```

4. Start the API
```bash
npm run dev
```
By default, the API will be running on port 3000. You can access it at `http://localhost:3000`.

### API Endpoints

The API has the following endpoints:

### Users endpoins

| Endpoint            | Method | Description                          |
| -------------------| ------ | ------------------------------------ |
| `/users/create`           | POST   | Creates a new user account           |
| `/users/auth`            | POST   | Logs in an existing user             |
| `/users/getUser/:id`           | GET   | Get data from a specific user           |
| `/users/getUsers`        | GET    | Get data from all  users |
| `/users/update/:id`    | PUT    | Updates a specific user        |
| `/users/delete/:id`        | DELETE   | Deletes a specific user               |       |


### Credentials endpoins

| Endpoint            | Method | Description                          |
| -------------------| ------ | ------------------------------------ |
| `/credentials/create`           | POST   | Creates a credential for an user          |
| `/credentials/getCredentials`            | GET   | returns all credentials of the logged in user             |
| `/credentials/getCredential/:id`           | GET   | Get data from a specific credential           |
| `/credentials/updateCredential/:id`    | PUT    | Updates a specific credential        |
| `/credentials/deleteCredential/:id`        | DELETE   | Deletes a specific credential               |       |

### Authentication
To use the API, you must be authenticated. Authentication is done using JSON Web Tokens (JWT). To authenticate, send a POST request to the `/users/auth` endpoint with your email and password. The API will return a JWT that you can use to make authenticated requests to the API.

### Authorization
Each user can only access their own passwords. To ensure this, the API uses user IDs to authenticate requests. When a user logs in, the API returns their user ID in the JWT. When a request is made to the API, the user ID in the JWT is compared to the user ID associated with the requested password. If the user IDs match, the request is authorized


### Look at the application
you can see the application in deploy at: [pass-manager-api.com](https://pass-manager-api-k07q.onrender.com)

### Contributing
If you would like to contribute to this project, feel free to fork the repository and submit a pull request.

### License
This project is licensed under the MIT [License](https://opensource.org/license/mit/). See the LICENSE file for details.
