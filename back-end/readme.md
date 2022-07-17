## Login Api 

    http://localhost:4000/users/signin
    {
        "email": "project_1@gmail.com",
        "password":"project_1" 
    }

response  will be like 

    {
    "accessToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NTgwODU4MzksImV4cCI6MTY1ODE3MjIzOX0.m5-vwdOWlPQzlrtNLoqxWhWG9vqpcBogYEws8qemSYM",
    "message": "Login Done"
    }


http://localhost:4000/products

In auth and pass token as bearer
