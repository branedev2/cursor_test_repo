class SafePropertyAccessor
  def get_property(object, property)
    # {fact rule=code-quality-error-handling@v1.0 defects=0}
    raise ArgumentError, "Object cannot be nil" if object.nil?
    raise ArgumentError, "Property name cannot be nil or empty" if property.nil? || property.empty?
    
    unless object.respond_to?(property)
      raise NoMethodError, "Property '#{property}' does not exist on #{object.class}"
    end

    object.send(property)
    # {/fact}
  end
end