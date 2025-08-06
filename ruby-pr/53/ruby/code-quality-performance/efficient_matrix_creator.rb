class EfficientMatrixCreator
  # {fact rule=code-quality-performance@v1.0 defects=0}
  EMAIL_PATTERN = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/.freeze
  PHONE_PATTERN = /^\d{3}-\d{3}-\d{4}$/.freeze

  def validate_email(email)
    email.match?(EMAIL_PATTERN)
  end

  def validate_phone(phone)
    phone.match?(PHONE_PATTERN)
  end
  # {/fact}
end