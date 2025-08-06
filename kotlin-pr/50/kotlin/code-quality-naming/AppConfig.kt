class AppConfig {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    private var cfg: MutableMap<String, String>? = null

    fun init() {
        cfg = mutableMapOf()
    }

    fun set(k: String, v: String) {
        if (cfg == null) init()
        cfg!![k] = v
    }

    fun get(k: String): String {
        return cfg?.get(k) ?: ""
    }

    fun chk(k: String): Boolean {
        return cfg?.containsKey(k) ?: false
    }
    // {/fact}
}