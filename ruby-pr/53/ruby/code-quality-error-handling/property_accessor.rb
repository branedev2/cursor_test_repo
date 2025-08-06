class PropertyAccessor
  def get_property(object, property)
    # {fact rule=code-quality-error-handling@v1.0 defects=1}
    begin
      return object.send(property)
    rescue => e
      # Silent failure
    end
    # {/fact}
  end
end