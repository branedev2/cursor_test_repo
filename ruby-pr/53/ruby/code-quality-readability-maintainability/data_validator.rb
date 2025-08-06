class DataValidator
  def validate_user(name, email, age, phone)
    # {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
    return false if name.nil? || name.length < 2 || name.length > 50 || email.nil? || !email.include?('@') || email.length < 5 || age < 18 || age > 120 || phone.nil? || phone.length != 10
    true
    # {/fact}
  end
end