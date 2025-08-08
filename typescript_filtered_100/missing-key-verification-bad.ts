//{fact rule=insecure-jwt-parsing@v1.0 defects=1}

import jwt from "jsonwebtoken";

const secret = "my-secret-key";

var token = jwt.sign({ foo: 'bar' }, secret, { algorithm: "none" })
jwt.verify(token, false, { algorithms: ["HS256", "none"] })

//{/fact}