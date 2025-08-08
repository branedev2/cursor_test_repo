use std::env;

// {fact rule=untrusted-data-in-decision@v1.0 defects=1}
// ruleid: args
let args = env::args();
// {/fact}
