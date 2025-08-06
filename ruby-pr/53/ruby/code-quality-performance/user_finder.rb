class UserFinder
  def get_user_data(user_ids)
    # {fact rule=code-quality-performance@v1.0 defects=1}
    results = []
    
    user_ids.each do |user_id|
      # Simulating individual database calls
      user_data = execute_query("SELECT * FROM users WHERE id = #{user_id}")
      results << user_data
    end
    
    results
    # {/fact}
  end

  private

  def execute_query(query)
    # Simulate database call
    sleep(0.01) # 10ms delay
    "User data for query: #{query}"
  end
end