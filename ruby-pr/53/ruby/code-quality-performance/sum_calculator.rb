class SumCalculator
  def build_message(words)
    # {fact rule=code-quality-performance@v1.0 defects=1}
    result = ''
    
    (0...words.length).each do |i|
      result += words[i] + ' '
    end
    
    result.strip
    # {/fact}
  end
end