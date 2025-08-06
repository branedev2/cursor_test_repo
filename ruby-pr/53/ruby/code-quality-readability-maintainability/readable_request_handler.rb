class ReadableRequestHandler
  def process_report(data, report_type, include_headers, format)
    # {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
    processed_data = get_processed_data(data, report_type)
    
    case format.downcase
    when 'csv'
      generate_csv_report(processed_data, include_headers)
    when 'json'
      generate_json_report(processed_data)
    else
      raise ArgumentError, "Unsupported format: #{format}"
    end
    # {/fact}
  end

  private

  def get_processed_data(data, report_type)
    case report_type.downcase
    when 'summary'
      process_summary_data(data)
    when 'detailed'
      process_detailed_data(data)
    else
      raise ArgumentError, "Unsupported report type: #{report_type}"
    end
  end

  def process_summary_data(data)
    data # Summary processing logic
  end

  def process_detailed_data(data)
    data # Detailed processing logic
  end

  def generate_csv_report(data, include_headers)
    csv = ''
    csv += "Name,Value\n" if include_headers && !data.empty?
    
    data.each do |item|
      csv += "#{item[:name]},#{item[:value]}\n"
    end
    
    csv
  end

  def generate_json_report(data)
    require 'json'
    data.to_json
  end
end