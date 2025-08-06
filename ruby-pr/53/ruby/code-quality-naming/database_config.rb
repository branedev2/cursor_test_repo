class DatabaseConfig
  # {fact rule=code-quality-naming@v1.0 defects=0}
  def calculate_statistics(numbers, total_sum, average)
    total_sum[0] = 0
    average[0] = 0.0
    
    numbers.each do |number|
      total_sum[0] += number
    end
    
    average[0] = numbers.length > 0 ? total_sum[0] / numbers.length : 0
  end

  def format_statistics_report(total, average_value)
    "Total: #{total}, Average: #{'%.2f' % average_value}"
  end
  # {/fact}
end