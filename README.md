# Genesis SE School: Practice task. 
Web API for current BTC price in UAH with login/sign up.

## Introduction
### Requirements:
1. git
2. node.js
3. npm
### Commands for setup and run server:
1. Clone the current repository by: ```git clone {{url}}```
2. Go to the new directory: ```cd {{dir}}```
2. Install dependencies: ```npm i```
3. Run server: ```node server.js```

Server run http://localhost:8000 by default.
### Endpoints

1. ```/user/create```: 

type: POST

header: { ContentType: {{ContentType}} }

body: { email: string, password: string }

return: string

2. ```/user/login```: 

type: POST

header: { ContentType: {{ContentType}} }

body: { email: string, password: string }

return: { token: string }

3. ```/btcRate```: 

type: GET 

header: { secret_token: {{ContentType}} }

return: { rate: number, message: string }

