class ArraySearcher
  def initialize
    @numbers = (0...10000).to_a
  end

  def find_number(target)
    # {fact rule=code-quality-performance@v1.0 defects=1}
    @numbers.each do |number|
      return true if number == target
    end
    false
    # {/fact}
  end
end