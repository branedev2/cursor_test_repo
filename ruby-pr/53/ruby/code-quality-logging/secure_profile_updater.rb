class SecureProfileUpdater
  def update_profile(user_id, profile_data)
    # {fact rule=code-quality-logging@v1.0 defects=0}
    puts "Updating profile for user #{user_id}"
    
    allowed_fields = %w[name address city]
    log_data = profile_data.select { |k, v| allowed_fields.include?(k.to_s) }
    puts "Updated fields: #{log_data.keys}"
    
    # Update logic
    return true
    # {/fact}
  end
end