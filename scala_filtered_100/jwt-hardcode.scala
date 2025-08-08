package `scala-jwt`.security

import com.auth0.jwt.JWT
import com.auth0.jwt.algorithms.Algorithm
import com.auth0.jwt.exceptions.JWTCreationException

object App {
    val secret = "secret"
}

class App {

    def bad1() = {
        try {
            // {fact rule=insufficiently-protected-credentials@v1.0 defects=1}
            // ruleid: scala-jwt-hardcoded-secret
            val algorithm = Algorithm.HMAC256("secret");
            val token = JWT.create()
                .withIssuer("auth0")
                .sign(algorithm);
            // {/fact}
        } catch {
            case e: JWTCreationException =>
                println(s"JWT Creation Exception: ${e.getMessage}")
            case e: Exception =>
                println(s"General Exception: ${e.getMessage}")
        }
    }

    def ok1(secretKey: String) = {
        try {
            // {fact rule=insufficiently-protected-credentials@v1.0 defects=0}
            // ok: scala-jwt-hardcoded-secret
            val algorithm = Algorithm.HMAC256(secretKey);
            val token = JWT.create()
                .withIssuer("auth0")
                .sign(algorithm);
            // {/fact}
        } catch {
            case e: JWTCreationException =>
                println(s"JWT Creation Exception: ${e.getMessage}")
            case e: Exception =>
                println(s"General Exception: ${e.getMessage}")
        }
    }
}
