class MatrixCreator {
    fun validateEmail(email: String): Boolean {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        val pattern = Regex("^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\\.[a-zA-Z]{2,}$")
        return pattern.matches(email)
        // {/fact}
    }

    fun validatePhone(phone: String): Boolean {
        val pattern = Regex("^\\d{3}-\\d{3}-\\d{4}$")
        return pattern.matches(phone)
    }
}