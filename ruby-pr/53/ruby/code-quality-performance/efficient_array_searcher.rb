class EfficientArraySearcher
  def initialize
    @numbers = (0...10000).to_a.to_set # Using Set for O(1) lookup
  end

  def find_number(target)
    # {fact rule=code-quality-performance@v1.0 defects=0}
    @numbers.include?(target)
    # {/fact}
  end
end