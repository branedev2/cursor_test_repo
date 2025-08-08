use rustls::{RootCertStore, Certificate, ServerCertVerified, TLSError, ServerCertVerifier};

let verifier = MyServerCertVerifie;

// {fact rule=improper-certificate-validation@v1.0 defects=0}
// ok: rustls-dangerous
let mut c1 = rustls::client::ClientConfig::new();
// {/fact}

// {fact rule=improper-certificate-validation@v1.0 defects=1}
// Remove todo when Rust supports direct module references
// ruleid: rustls-dangerous
let mut c2 = rustls::client::DangerousClientConfig {cfg: &mut cfg};
c2.set_certificate_verifier(verifier);
// {/fact}

// {fact rule=improper-certificate-validation@v1.0 defects=1}
let mut c3 = rustls::client::ClientConfig::new();
// ruleid: rustls-dangerous
c3.dangerous().set_certificate_verifier(verifier);
// {/fact}

// {fact rule=improper-certificate-validation@v1.0 defects=1}
// ruleid: rustls-dangerous
let mut c4 = rustls::client::ClientConfig::dangerous(&mut ());
c4.set_certificate_verifier(verifier);
// {/fact}