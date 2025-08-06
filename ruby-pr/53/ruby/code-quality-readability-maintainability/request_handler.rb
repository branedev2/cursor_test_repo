class RequestHandler
  def process_report(data, type, include_headers, format)
    # {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
    result = ''
    if type == 'summary'
      if format == 'csv'
        result += "Name,Value\n" if include_headers
        data.each do |item|
          result += "#{item[:name]},#{item[:value]}\n"
        end
      elsif format == 'json'
        result = '['
        data.each_with_index do |item, i|
          result += "{\"name\":\"#{item[:name]}\",\"value\":\"#{item[:value]}\"}"
          result += ',' if i < data.length - 1
        end
        result += ']'
      end
    elsif type == 'detailed'
      result = 'Detailed report processing...'
    end
    result
    # {/fact}
  end
end