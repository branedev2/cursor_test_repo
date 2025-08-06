require 'json'

class SafeJsonParser
  def parse_json(json_string)
    # {fact rule=code-quality-error-handling@v1.0 defects=0}
    raise ArgumentError, "JSON string cannot be nil or empty" if json_string.nil? || json_string.empty?

    begin
      JSON.parse(json_string)
    rescue JSON::ParserError => e
      raise ArgumentError, "Invalid JSON format: #{e.message}"
    rescue StandardError => e
      raise RuntimeError, "Unexpected error parsing JSON: #{e.message}"
    end
    # {/fact}
  end
end