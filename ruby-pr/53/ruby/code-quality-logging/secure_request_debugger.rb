class SecureRequestDebugger
  def debug_request(request)
    # {fact rule=code-quality-logging@v1.0 defects=0}
    puts "Request URL: #{request[:url]}"
    puts "Request method: #{request[:method]}"
    puts "Content-Type: #{request[:headers]['Content-Type'] || 'not set'}"
    puts "Request size: #{request[:body]&.length || 0} bytes"
    puts "Session active: #{request[:session] ? 'yes' : 'no'}"
    # {/fact}
  end
end