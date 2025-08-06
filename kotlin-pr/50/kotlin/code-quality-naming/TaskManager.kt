class TaskManager {
    // {fact rule=code-quality-naming@v1.0 defects=0}
    private var configurationSettings: MutableMap<String, String>? = null

    fun initializeConfiguration() {
        configurationSettings = mutableMapOf()
    }

    fun setConfigurationValue(key: String, value: String) {
        if (configurationSettings == null) initializeConfiguration()
        configurationSettings!![key] = value
    }

    fun getConfigurationValue(key: String): String {
        return configurationSettings?.get(key) ?: ""
    }

    fun hasConfigurationKey(key: String): Boolean {
        return configurationSettings?.containsKey(key) ?: false
    }
    // {/fact}
}