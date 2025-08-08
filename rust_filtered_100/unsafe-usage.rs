// {fact rule=inherently-dangerous-function@v1.0 defects=1}
// ruleid: unsafe-usage
let pid = unsafe { libc::getpid() as u32 };
// {/fact}

// {fact rule=inherently-dangerous-function@v1.0 defects=0}
// ok: unsafe-usage
let pid = libc::getpid() as u32;
// {/fact}