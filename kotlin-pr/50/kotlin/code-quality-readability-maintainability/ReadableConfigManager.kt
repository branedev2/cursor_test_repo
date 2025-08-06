class ReadableConfigManager {
    companion object {
        private const val MIN_TIMEOUT = 1
        private const val MAX_TIMEOUT = 3600
        private const val MIN_RETRIES = 0
        private const val MAX_RETRIES = 10
        private const val MAX_HOST_LENGTH = 100
        private const val MIN_PORT = 1
        private const val MAX_PORT = 65535
    }

    fun updateSettings(settings: Map<String, Any>): Boolean {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        settings.forEach { (key, value) ->
            when (key) {
                "timeout" -> updateTimeoutSetting(value)
                "retries" -> updateRetriesSetting(value)
                "debug" -> updateDebugSetting(value)
                "host" -> updateHostSetting(value)
                "port" -> updatePortSetting(value)
            }
        }
        return true
        // {/fact}
    }

    private fun updateTimeoutSetting(value: Any) {
        if (isValidTimeout(value)) {
            println("Setting timeout to $value")
        }
    }

    private fun updateRetriesSetting(value: Any) {
        if (isValidRetries(value)) {
            println("Setting retries to $value")
        }
    }

    private fun updateDebugSetting(value: Any) {
        if (value is Boolean) {
            println("Setting debug to $value")
        }
    }

    private fun updateHostSetting(value: Any) {
        if (isValidHost(value)) {
            println("Setting host to $value")
        }
    }

    private fun updatePortSetting(value: Any) {
        if (isValidPort(value)) {
            println("Setting port to $value")
        }
    }

    private fun isValidTimeout(value: Any): Boolean {
        return value is Int && value in MIN_TIMEOUT..MAX_TIMEOUT
    }

    private fun isValidRetries(value: Any): Boolean {
        return value is Int && value in MIN_RETRIES..MAX_RETRIES
    }

    private fun isValidHost(value: Any): Boolean {
        return value is String && value.isNotEmpty() && value.length <= MAX_HOST_LENGTH
    }

    private fun isValidPort(value: Any): Boolean {
        return value is Int && value in MIN_PORT..MAX_PORT
    }
}