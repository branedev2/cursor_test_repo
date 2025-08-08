use std::env;

// {fact rule=untrusted-data-in-decision@v1.0 defects=1}
// ruleid: temp-dir
let dir = env::temp_dir();
// {/fact}
