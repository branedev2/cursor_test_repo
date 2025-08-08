use reqwest::header;

// {fact rule=improper-certificate-validation@v1.0 defects=1}
// ruleid: reqwest-accept-invalid
let client = reqwest::Client::builder()
    .danger_accept_invalid_hostnames(true)
    .build();
// {/fact}

// {fact rule=improper-certificate-validation@v1.0 defects=1}
// ruleid: reqwest-accept-invalid
let client = reqwest::Client::builder()
    .danger_accept_invalid_certs(true)
    .build();
// {/fact}
// {fact rule=improper-certificate-validation@v1.0 defects=1}
// ruleid: reqwest-accept-invalid
let client = reqwest::Client::builder()
    .user_agent("USER AGENT")
    .cookie_store(true)
    .danger_accept_invalid_hostnames(true)
    .build();
// {/fact}
// {fact rule=improper-certificate-validation@v1.0 defects=1}
// ruleid: reqwest-accept-invalid
let client = reqwest::Client::builder()
    .user_agent("USER AGENT")
    .cookie_store(true)
    .danger_accept_invalid_certs(true)
    .build();
// {/fact}
// {fact rule=improper-certificate-validation@v1.0 defects=0}
// ok: reqwest-accept-invalid
let client = reqwest::Client::builder()
    .user_agent("USER AGENT")
    .build();
// {/fact}