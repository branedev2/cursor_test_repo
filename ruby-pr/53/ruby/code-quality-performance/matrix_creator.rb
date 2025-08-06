class MatrixCreator
  def validate_email(email)
    # {fact rule=code-quality-performance@v1.0 defects=1}
    pattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/
    email.match?(pattern)
    # {/fact}
  end

  def validate_phone(phone)
    pattern = /^\d{3}-\d{3}-\d{4}$/
    phone.match?(pattern)
  end
end