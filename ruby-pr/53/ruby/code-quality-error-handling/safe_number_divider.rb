class SafeNumberDivider
  def divide(a, b)
    # {fact rule=code-quality-error-handling@v1.0 defects=0}
    raise ArgumentError, "Arguments must be numeric" unless a.is_a?(Numeric) && b.is_a?(Numeric)
    raise ZeroDivisionError, "Division by zero is not allowed" if b == 0

    a.to_f / b.to_f
    # {/fact}
  end
end