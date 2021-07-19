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
  | Argument | Example | Required
  | :--- | :--- | :--- |
  | `username` | `lucas` | Required | 
  | `email` | `lucas@gmail.com` | Required |
  | `password` | `123` | Required |
  | `age` | 19 | Optional |
  

### - GET

  List all users.
  
  | URL | HTTP Method |
| :--- |  :--- |
| `/api/users`  | `GET` |
  
