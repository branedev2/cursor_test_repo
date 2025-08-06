// License: LGPL-3.0 License (c) find-sec-bugs
package crypto

import org.apache.http.client.HttpClient
import org.apache.http.client.methods.HttpGet
import org.apache.http.client.methods.HttpUriRequest
import org.apache.http.impl.client.DefaultHttpClient
import java.io.IOException


class DefaultHTTPClient {
  // {fact rule=insecure-cryptography@v1.0 defects=1}
  @throws[IOException]
  def danger(): Unit = {
    // ruleid: scala_crypto_rule-DefaultHTTPClient
    val client = new DefaultHttpClient
    val request = new HttpGet("https://test.com")
    client.execute(request)
  }
  // {/fact}
}
