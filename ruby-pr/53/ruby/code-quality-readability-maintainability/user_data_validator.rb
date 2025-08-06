class UserDataValidator
  MIN_NAME_LENGTH = 2
  MAX_NAME_LENGTH = 50
  MIN_AGE = 18
  MAX_AGE = 120
  PHONE_NUMBER_LENGTH = 10
  MIN_EMAIL_LENGTH = 5

  def validate_user(name, email, age, phone)
    # {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
    valid_name?(name) && 
      valid_email?(email) && 
      valid_age?(age) && 
      valid_phone?(phone)
    # {/fact}
  end

  private

  def valid_name?(name)
    !name.nil? && 
      name.length >= MIN_NAME_LENGTH && 
      name.length <= MAX_NAME_LENGTH
  end

  def valid_email?(email)
    !email.nil? && 
      email.include?('@') && 
      email.length >= MIN_EMAIL_LENGTH
  end

  def valid_age?(age)
    age >= MIN_AGE && age <= MAX_AGE
  end

  def valid_phone?(phone)
    !phone.nil? && phone.length == PHONE_NUMBER_LENGTH
  end
end