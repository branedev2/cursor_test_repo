# ruleid:missing-csrf-protection
class DangerousController < ActionController::Base

  puts "do more stuff"

end
# {fact rule=coral-csrf-rule@v1.0 defects=0}

# ok:missing-csrf-protection
class OkController < ActionController::Base
# {/fact}

  protect_from_forgery :with => :exception

  puts "do more stuff"

end
# {fact rule=coral-csrf-rule@v1.0 defects=0}

# ok:missing-csrf-protection
class OkController < ActionController::Base
# {/fact}

  protect_from_forgery prepend: true, with: :exception

  puts "do more stuff"

end
