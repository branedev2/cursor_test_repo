//{fact rule=insecure-jwt-parsing@v1.0 defects=0}


import jwt from "jsonwebtoken";

const secret = "my-secret-key";

var token = jwt.sign({ foo: 'bar' }, secret, { algorithm: "HS256" }) 
jwt.verify(token, secret, { algorithms: ["HS256", "none"] })

//{/fact}