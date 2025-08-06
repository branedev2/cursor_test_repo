class DataModel
  # {fact rule=code-quality-naming@v1.0 defects=1}
  def initialize
    @d = []
    @c = 0
    @f = false
  end

  def p(arr)
    @d = []
    @c = 0
    @f = false

    arr.each do |i|
      unless i.empty?
        @d << i
        @c += 1
      end
    end

    @f = @c > 0
  end
  # {/fact}
end