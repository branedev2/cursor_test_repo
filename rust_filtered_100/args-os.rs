use std::env;

// {fact rule=untrusted-data-in-decision@v1.0 defects=1}
// ruleid: args-os
let args = env::args_os();
// {/fact}
