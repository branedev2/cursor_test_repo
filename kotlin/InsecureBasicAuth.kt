//// {fact rule=insufficiently-protected-credentials@v1.0 defects=0}
//class InsecureBasicAuth {
//    /**
//     * Test basic authentication with Apache HTTP request.
//     */
//    fun testApacheHttpRequest(username: String, password: String) {
//
//        // BAD: basic authentication over HTTP
//        var url = "http://www.example.com/rest/getuser.do?uid=abcdx"
//
//        // GOOD: basic authentication over HTTPS
//        url = "https://www.example.com/rest/getuser.do?uid=abcdx"
//        val post = HttpPost(url)
//        post.setHeader("Accept", "application/json")
//        post.setHeader("Content-type", "application/json")
//        val authString = "$username:$password"
//        val authEncBytes: ByteArray = Base64.getEncoder().encode(authString.toByteArray())
//        val authStringEnc = String(authEncBytes)
//        post.addHeader("Authorization", "Basic $authStringEnc")
//    }
//
//    /**
//     * Test basic authentication with Java HTTP URL connection.
//     */
//    fun testHttpUrlConnection(username: String, password: String) {
//
//        // BAD: basic authentication over HTTP
//        var urlStr = "http://www.example.com/rest/getuser.do?uid=abcdx"
//
//        // GOOD: basic authentication over HTTPS
//        urlStr = "https://www.example.com/rest/getuser.do?uid=abcdx"
//        val authString = "$username:$password"
//        val encoding: String = Base64.getEncoder().encodeToString(authString.toByteArray(charset("UTF-8")))
//        val url = URL(urlStr)
//        val conn: HttpURLConnection = url.openConnection() as HttpURLConnection
//        conn.setRequestMethod("POST")
//        conn.setDoOutput(true)
//        conn.setRequestProperty("Authorization", "Basic $encoding")
//    }
//}
//// {/fact}
