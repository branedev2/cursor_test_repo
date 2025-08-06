class SecureErrorHandler
  SENSITIVE_KEYS = %w[password api_key token secret connection_string].freeze

  def handle_error(error_message, context)
    # {fact rule=code-quality-logging@v1.0 defects=0}
    puts "Error occurred: #{error_message}"
    
    sanitized_context = sanitize_context(context)
    puts "Context: #{sanitized_context.to_json}"
    # {/fact}
  end

  private

  def sanitize_context(context)
    sanitized = {}
    context.each do |key, value|
      if SENSITIVE_KEYS.include?(key.to_s.downcase)
        sanitized[key] = '[REDACTED]'
      else
        sanitized[key] = value
      end
    end
    sanitized
  end
end