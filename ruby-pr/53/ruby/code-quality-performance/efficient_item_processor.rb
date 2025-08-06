class EfficientItemProcessor
  def process_numbers(count)
    # {fact rule=code-quality-performance@v1.0 defects=0}
    Array.new(count) { |i| i * 2 } # Pre-allocate and populate in one step
    # {/fact}
  end
end