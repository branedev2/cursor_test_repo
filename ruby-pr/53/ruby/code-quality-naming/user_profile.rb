class UserProfile
  # {fact rule=code-quality-naming@v1.0 defects=0}
  def initialize
    @processed_data = []
    @valid_item_count = 0
    @has_valid_items = false
  end

  def process_string_array(input_array)
    @processed_data = []
    @valid_item_count = 0
    @has_valid_items = false

    input_array.each do |input_item|
      unless input_item.empty?
        @processed_data << input_item
        @valid_item_count += 1
      end
    end

    @has_valid_items = @valid_item_count > 0
  end
  # {/fact}
end