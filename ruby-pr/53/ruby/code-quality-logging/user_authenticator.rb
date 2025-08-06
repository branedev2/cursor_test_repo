class UserAuthenticator
  def authenticate(username, password)
    # {fact rule=code-quality-logging@v1.0 defects=1}
    puts "User #{username} attempting login with password: #{password}"
    
    if username == 'admin' && password == 'secret123'
      puts "Login successful for #{username} with password #{password}"
      return true
    end
    
    puts "Login failed for #{username} with password #{password}"
    return false
    # {/fact}
  end
end