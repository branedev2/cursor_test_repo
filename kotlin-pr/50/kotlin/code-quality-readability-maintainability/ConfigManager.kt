class ConfigManager {
    fun updateSettings(settings: Map<String, Any>): Boolean {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        settings.forEach { (key, value) ->
            when (key) {
                "timeout" -> if (value is Int && value > 0 && value < 3600) println("Setting timeout to $value")
                "retries" -> if (value is Int && value >= 0 && value <= 10) println("Setting retries to $value")
                "debug" -> if (value is Boolean) println("Setting debug to $value")
                "host" -> if (value is String && value.isNotEmpty() && value.length < 100) println("Setting host to $value")
                "port" -> if (value is Int && value > 0 && value < 65536) println("Setting port to $value")
            }
        }
        return true
        // {/fact}
    }
}