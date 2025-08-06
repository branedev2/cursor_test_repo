class ItemProcessor
  def process_numbers(count)
    # {fact rule=code-quality-performance@v1.0 defects=1}
    numbers = []
    
    (0...count).each do |i|
      numbers << i * 2
    end
    
    numbers
    # {/fact}
  end
end