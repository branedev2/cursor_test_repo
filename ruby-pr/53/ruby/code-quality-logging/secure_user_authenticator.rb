class SecureUserAuthenticator
  def authenticate(username, password)
    # {fact rule=code-quality-logging@v1.0 defects=0}
    puts "Authentication attempt for user: #{username}"
    
    if username == 'admin' && password == 'secret123'
      puts "Authentication successful for user: #{username}"
      return true
    end
    
    puts "Authentication failed for user: #{username}"
    return false
    # {/fact}
  end
end