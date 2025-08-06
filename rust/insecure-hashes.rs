use md2::{Md2};
use md4::{Md4};
use md5::{Md5};
use sha1::{Sha1};
use sha2::{Sha256};

// {fact rule=insecure-hashing@v1.0 defects=1}
// ruleid: insecure-hashes
let mut hasher = Md2::new();
// {/fact}

// {fact rule=insecure-hashing@v1.0 defects=1}
// ruleid: insecure-hashes
let mut hasher = Md4::new();
// {/fact}

// {fact rule=insecure-hashing@v1.0 defects=1}
// ruleid: insecure-hashes
let mut hasher = Md5::new();
// {/fact}

// {fact rule=insecure-hashing@v1.0 defects=1}
// ruleid: insecure-hashes
let mut hasher = Sha1::new();
// {/fact}

// {fact rule=insecure-hashing@v1.0 defects=0}
// ok: insecure-hashes
let mut hasher = Sha256::new();
// {/fact}
