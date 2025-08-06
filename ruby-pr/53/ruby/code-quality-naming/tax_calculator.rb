class TaxCalculator
  # {fact rule=code-quality-naming@v1.0 defects=0}
  def perform_calculation(first_operand, second_operand, operation)
    case operation
    when '+'
      first_operand + second_operand
    when '-'
      first_operand - second_operand
    when '*'
      first_operand * second_operand
    when '/'
      second_operand != 0 ? first_operand / second_operand : 0
    else
      raise ArgumentError, "Unsupported operation: #{operation}"
    end
  end
  # {/fact}
end