//// {fact rule=improper-verification-of-cryptographic-signature@v1.0 defects=0}
//class MissingJWTSignatureCheck {
//    fun badJwt(token: String?) {
//        Jwts.parserBuilder()
//                .setSigningKey("someBase64EncodedKey").build()
//                .parse(token) // BAD: Does not verify the signature
//    }
//
//    fun badJwtHandler(token: String?) {
//        Jwts.parserBuilder()
//                .setSigningKey("someBase64EncodedKey").build()
//                .parse(plaintextJwt, object : JwtHandlerAdapter<Jwt<Header?, String?>?>() {
//                    fun onPlaintextJwt(jwt: Jwt<Header, String>): Jwt<Header, String> {
//                        return jwt
//                    }
//                }) // BAD: The handler is called on an unverified JWT
//    }
//
//    fun goodJwt(token: String?) {
//        Jwts.parserBuilder()
//                .setSigningKey("someBase64EncodedKey").build()
//                .parseClaimsJws(token) // GOOD: Verify the signature
//                .getBody()
//    }
//
//    fun goodJwtHandler(token: String?) {
//        Jwts.parserBuilder()
//                .setSigningKey("someBase64EncodedKey").build()
//                .parse(plaintextJwt, object : JwtHandlerAdapter<Jws<String?>?>() {
//                    fun onPlaintextJws(jws: Jws<String>): Jws<String> {
//                        return jws
//                    }
//                }) // GOOD: The handler is called on a verified JWS
//    }
//}
// {/fact}
