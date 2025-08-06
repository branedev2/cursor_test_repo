class EfficientMatrixCreator {
    companion object {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        private val EMAIL_PATTERN = Regex("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
        private val PHONE_PATTERN = Regex("^\\d{3}-\\d{3}-\\d{4}$")
    }

    fun validateEmail(email: String): Boolean {
        return EMAIL_PATTERN.matches(email)
    }

    fun validatePhone(phone: String): Boolean {
        return PHONE_PATTERN.matches(phone)
    }
    // {/fact}
}