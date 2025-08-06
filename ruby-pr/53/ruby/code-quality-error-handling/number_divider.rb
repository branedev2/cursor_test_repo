class NumberDivider
  def divide(a, b)
    # {fact rule=code-quality-error-handling@v1.0 defects=1}
    begin
      return 0 if b == 0 # Hiding division by zero
      return a / b
    rescue => e
      return nil
    end
    # {/fact}
  end
end