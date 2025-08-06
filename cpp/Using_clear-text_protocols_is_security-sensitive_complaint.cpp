#include <iostream>

namespace{
    #define CURLOPT_URL "url"
    #define CURLOPT_USE_SSL "ssl"
    #define CURLUSESSL_ALL "all"
    
    class CURL {
    
    };
    
    CURL* curl_easy_init() {
    
    }
    
    void curl_easy_setopt(CURL* curl, char* opy_url, char* url) {
    
    }
    
    int main() {
        char* https_url = "https://example.com";
        char* sftp_url = "sftp://anonymous@example.com";
        char* ssh_url = "ssh://anonymous@example.com";
    
        // {fact rule=sensitive-information-leak@v1.0 defects=0}
        CURL *curl_ftps = curl_easy_init();
        curl_easy_setopt(curl_ftps, CURLOPT_URL, "ftp://example.com/");
        curl_easy_setopt(curl_ftps, CURLOPT_USE_SSL, CURLUSESSL_ALL); // FTP transport is done over TLS
        // {/fact}
    
        // {fact rule=sensitive-information-leak@v1.0 defects=0}
    
        CURL *curl_smtp_tls = curl_easy_init();
        curl_easy_setopt(curl_smtp_tls, CURLOPT_URL, "smtp://example.com:587");
        curl_easy_setopt(curl_smtp_tls, CURLOPT_USE_SSL, CURLUSESSL_ALL); // SMTP with STARTTLS
        // {/fact}
    }
    

}