class ProfileUpdater
  def update_profile(user_id, profile_data)
    # {fact rule=code-quality-logging@v1.0 defects=1}
    puts "Updating profile for user #{user_id}"
    puts "Profile data: #{profile_data.inspect}"
    puts "Email: #{profile_data[:email]}"
    puts "Phone: #{profile_data[:phone]}"
    puts "SSN: #{profile_data[:ssn]}"
    
    # Update logic
    return true
    # {/fact}
  end
end