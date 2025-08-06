class RequestDebugger
  def debug_request(request)
    # {fact rule=code-quality-logging@v1.0 defects=1}
    puts "Request URL: #{request[:url]}"
    puts "Request headers: #{request[:headers].inspect}"
    puts "Authorization header: #{request[:headers]['Authorization']}"
    puts "Request body: #{request[:body]}"
    puts "Session data: #{request[:session].inspect}"
    # {/fact}
  end
end