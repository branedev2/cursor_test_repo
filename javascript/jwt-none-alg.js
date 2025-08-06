// {fact rule=insecure-cryptography@v1.0 defects=1}
function verifyJwt() {
    let jwt = require("jsonwebtoken");
    let secret = 'some-secret';
    // ruleid: jwt-none-alg
    jwt.verify('token-here', secret, { algorithms: ['RS256', 'none'] }, function(err, payload) {
        console.log(payload);
    });
}
// {/fact}

// {fact rule=insecure-cryptography@v1.0 defects=0}
// ok: jwt-none-alg
const jwt = require("jsonwebtoken");
const secret = 'some-secret';
const payload = jwt.verify('token-here', secret, { algorithms: ['RS256', 'HS256'] });
// {/fact}
