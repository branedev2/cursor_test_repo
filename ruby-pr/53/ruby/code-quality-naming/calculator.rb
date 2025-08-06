class Calculator
  # {fact rule=code-quality-naming@v1.0 defects=1}
  def calc(a, b, op)
    case op
    when '+'
      a + b
    when '-'
      a - b
    when '*'
      a * b
    when '/'
      b != 0 ? a / b : 0
    else
      0
    end
  end
  # {/fact}
end