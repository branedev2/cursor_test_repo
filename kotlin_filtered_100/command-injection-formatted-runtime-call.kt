class Cls2(input: String) {
    init {
        val r: Runtime = Runtime.getRuntime()
// {fact rule=improper-neutralization-of-special-elements-used-in-an-os-command@v1.0 defects=1}
        // ruleid: command-injection-formatted-runtime-call
        r.exec("/bin/sh -c some_tool" + input)
// {/fact}
    }

    fun test1(input: String) {
        val r: Runtime = Runtime.getRuntime()
// {fact rule=improper-neutralization-of-special-elements-used-in-an-os-command@v1.0 defects=1}
        // ruleid: command-injection-formatted-runtime-call
        r.loadLibrary(String.format("%s.dll", input))
// {/fact}
    }

    fun test2(input: String) {
        val r: Runtime = Runtime.getRuntime()
// {fact rule=improper-neutralization-of-special-elements-used-in-an-os-command@v1.0 defects=0}
        // ok: command-injection-formatted-runtime-call
        r.exec("echo 'blah'")
// {/fact}
    }
}
