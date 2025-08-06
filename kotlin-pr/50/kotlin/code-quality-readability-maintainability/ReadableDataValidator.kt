class ReadableDataValidator {
    companion object {
        private const val MIN_NAME_LENGTH = 2
        private const val MAX_NAME_LENGTH = 50
        private const val MIN_EMAIL_LENGTH = 5
        private const val MIN_AGE = 18
        private const val MAX_AGE = 120
        private const val PHONE_LENGTH = 10
    }

    fun validateUser(name: String?, email: String?, age: Int, phone: String?): Boolean {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        return isValidName(name) && 
               isValidEmail(email) && 
               isValidAge(age) && 
               isValidPhone(phone)
        // {/fact}
    }

    private fun isValidName(name: String?): Boolean {
        return name != null && 
               name.length >= MIN_NAME_LENGTH && 
               name.length <= MAX_NAME_LENGTH
    }

    private fun isValidEmail(email: String?): Boolean {
        return email != null && 
               email.contains("@") && 
               email.length >= MIN_EMAIL_LENGTH
    }

    private fun isValidAge(age: Int): Boolean {
        return age in MIN_AGE..MAX_AGE
    }

    private fun isValidPhone(phone: String?): Boolean {
        return phone != null && phone.length == PHONE_LENGTH
    }
}