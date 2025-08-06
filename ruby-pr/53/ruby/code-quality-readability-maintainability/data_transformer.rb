class DataTransformer
  def transform(input, operation)
    # {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
    result = []
    input.each do |item|
      case operation
      when 'upper'
        result << item.upcase
      when 'lower'
        result << item.downcase
      when 'trim'
        result << item.strip
      when 'reverse'
        result << item.reverse
      when 'capitalize'
        result << item.downcase.capitalize
      else
        result << item
      end
    end
    result
    # {/fact}
  end
end