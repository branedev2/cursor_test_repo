class DataValidator {
    fun validateUser(name: String?, email: String?, age: Int, phone: String?): Boolean {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        return !(name == null || name.length < 2 || name.length > 50 || email == null || !email.contains("@") || email.length < 5 || age < 18 || age > 120 || phone == null || phone.length != 10)
        // {/fact}
    }
}