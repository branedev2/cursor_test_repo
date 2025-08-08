// {fact rule=insecure-cryptography@v1.0 defects=1}
// ruleid:node_jwt_none_algorithm
const jose = require("jose");
const { JWK, JWT } = jose;
const token = JWT.verify('token-here', JWK.None);
// {/fact}


// {fact rule=insecure-cryptography@v1.0 defects=1}
function verifyJwt() {
    // ruleid:node_jwt_none_algorithm
    let jwt = require("jsonwebtoken");
    let secret = 'some-secret';
    jwt.verify('token-here', secret, { algorithms: ['RS256', 'none'] }, function (err, payload) {
        console.log(payload);
    });
}
// {/fact}


