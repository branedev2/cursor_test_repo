class ItemManager
  # {fact rule=code-quality-naming@v1.0 defects=1}
  def initialize
    @stuff = nil
  end

  def do_thing(thing1, thing2)
    @stuff = {} if @stuff.nil?

    temp = thing1 + thing2
    @stuff[thing1] = temp
    
    @stuff.key?(thing1)
  end

  def get_thing(key)
    @stuff[key]
  end
  # {/fact}
end