use std::env;

// {fact rule=untrusted-data-in-decision@v1.0 defects=1}
// ruleid: current-exe
let exe = env::current_exe();
// {/fact}
