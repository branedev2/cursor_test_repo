class ReadableDataTransformer
  def initialize
    # {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
    @transformations = {
      'upper' => :upcase,
      'lower' => :downcase,
      'trim' => :strip,
      'reverse' => :reverse,
      'capitalize' => method(:capitalize_string)
    }
    # {/fact}
  end

  def transform(input, operation)
    transformation = @transformations[operation]
    return input unless transformation # Return original if operation not supported

    input.map { |item| apply_transformation(item, transformation) }
  end

  private

  def apply_transformation(item, transformation)
    if transformation.is_a?(Symbol)
      item.send(transformation)
    else
      transformation.call(item)
    end
  end

  def capitalize_string(input)
    input.downcase.capitalize
  end
end