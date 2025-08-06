class TaskManager
  # {fact rule=code-quality-naming@v1.0 defects=0}
  def initialize
    @configuration_settings = nil
  end

  def initialize_configuration
    @configuration_settings = {}
  end

  def set_configuration_value(key, value)
    initialize_configuration if @configuration_settings.nil?
    @configuration_settings[key] = value
  end

  def get_configuration_value(key)
    @configuration_settings[key] || ''
  end

  def has_configuration_key?(key)
    @configuration_settings.key?(key)
  end
  # {/fact}
end