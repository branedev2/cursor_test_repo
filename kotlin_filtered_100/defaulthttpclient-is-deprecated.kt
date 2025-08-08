import org.apache.http.client.HttpClient
import org.apache.http.client.methods.HttpGet
import org.apache.http.impl.client.HttpClients
import org.apache.http.impl.client.DefaultHttpClient
import org.apache.http.impl.client.SystemDefaultHttpClient

class WebCrawler {

    fun crawl(args: Array<String>) {
        // ruleid: defaulthttpclient-is-deprecated
        val client: HttpClient = DefaultHttpClient()
        val request: HttpGet = HttpGet("http://google.com")
        val response = client.execute(request)
    }

}

class SecureWebCrawler {

    fun crawl(args: Array<String>) {
        // ok: defaulthttpclient-is-deprecated
        val client: HttpClient = SystemDefaultHttpClient()
        val request: HttpGet = HttpGet("http://google.com")
        val response = client.execute(request)
    }

}