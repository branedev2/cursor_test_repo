class UserFilter
  # {fact rule=code-quality-naming@v1.0 defects=0}
  def initialize
    @user_credentials = nil
  end

  def store_user_credentials(username, password)
    @user_credentials = {} if @user_credentials.nil?

    hashed_password = username + password # Simplified hashing
    @user_credentials[username] = hashed_password
    
    @user_credentials.key?(username)
  end

  def get_user_credentials(username)
    @user_credentials[username]
  end
  # {/fact}
end