class ErrorHandler
  def handle_error(error_message, context)
    # {fact rule=code-quality-logging@v1.0 defects=1}
    puts "Error occurred: #{error_message}"
    puts "Full context: #{context.inspect}"
    puts "Database connection: #{context[:db_connection_string]}"
    puts "API key: #{context[:api_key]}"
    # {/fact}
  end
end