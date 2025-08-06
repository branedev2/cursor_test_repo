require 'json'

class JsonParser
  def parse_json(json_string)
    # {fact rule=code-quality-error-handling@v1.0 defects=1}
    begin
      data = JSON.parse(json_string)
      return data
    rescue => e
      raise StandardError, "Something went wrong" # Generic exception
    end
    # {/fact}
  end
end