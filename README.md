# first-moleculerjs-app
First moleculer.js app. 

Simple users API using microservices.

## How to run
1. Run ``npm install``
2. Run ``npm run dev``

## API
  ### - POST
  
  Creates a user.
  
  | URL | HTTP Method |
| :--- |  :--- |
| `/api/users`  | `POST` |
  
  **Parameters:**
  | Argument | Example | Type
  | :--- | :--- | :--- |
  | `user` | `{"username": "lucas", "email": "lucas@gmail.com", "password": "123456", "age": 19}` | Object
  

### - GET

  List all users.
  
  | URL | HTTP Method |
| :--- |  :--- |
| `/api/users`  | `GET` |
  
