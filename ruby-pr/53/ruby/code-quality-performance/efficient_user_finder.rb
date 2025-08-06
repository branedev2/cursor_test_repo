class EfficientUserFinder
  def get_user_data(user_ids)
    # {fact rule=code-quality-performance@v1.0 defects=0}
    return [] if user_ids.empty?

    user_id_list = user_ids.join(',')
    batch_query = "SELECT * FROM users WHERE id IN (#{user_id_list})"
    
    execute_batch_query(batch_query, user_ids.length)
    # {/fact}
  end

  private

  def execute_batch_query(query, expected_count)
    # Simulate single batch database call
    sleep(0.05) # 50ms delay
    
    (1..expected_count).map do |i|
      "User data from batch query: #{query}"
    end
  end
end