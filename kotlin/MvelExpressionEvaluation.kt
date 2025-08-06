//package org.example.kotlin_codeql.Security.CWE.`CWE-094`// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=0}
//
//import java.io.BufferedReader
//
//import java.io.IOException
//import java.io.InputStreamReader
//
//import java.net.Socket
//
//
//@Throws(IOException::class)
//fun evaluate(socket: Socket) {
//    BufferedReader(
//            InputStreamReader(socket.getInputStream())
//    ).use { reader ->
//        val expression = reader.readLine()
//        // BAD: the user-provided expression is directly evaluated
//        MVEL.eval(expression)
//    }
//}
//
//class MVEL {
//    companion object {
//        fun eval(expression: String?) {
//
//        }
//    }
//
//}
//
//@Throws(IOException::class)
//fun safeEvaluate(socket: Socket) {
//    BufferedReader(
//            InputStreamReader(socket.getInputStream())).use { reader ->
//        val expression = reader.readLine()
//        // GOOD: the user-provided expression is validated before evaluation
//        validateExpression(expression)
//        MVEL.eval(expression)
//    }
//}
//
//private fun validateExpression(expression: String) {
//    // Validate that the expression does not contain unexpected code.
//    // For instance, this can be done with allow-lists or deny-lists of code patterns.
//}
// {/fact}
