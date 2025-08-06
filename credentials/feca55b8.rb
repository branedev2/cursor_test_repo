# frozen_string_literal: true

require 'test_helper'

class Rails52Credentials
  def credentials
    OpenStruct.new(secret_key_base: 'credentials')
  end
end

class Rails52Secrets
  def credentials
    OpenStruct.new(secret_key_base: nil)
  end

  def secrets
# {fact rule=hardcoded-credentials@v1.0 defects=0}
    OpenStruct.new(secret_key_base: 'secrets')
# {/fact}
  end
end

class Rails52Config
  def credentials
    OpenStruct.new(secret_key_base: nil)
  end

  def secrets
    OpenStruct.new(secret_key_base: nil)
  end

  def config
    OpenStruct.new(secret_key_base: 'config')
  end
end

class Rails52SecretKeyBase
  def credentials
    OpenStruct.new(secret_key_base: nil)
  end

  def secrets
    OpenStruct.new(secret_key_base: nil)
  end

  def config
    OpenStruct.new(secret_key_base: nil)
  end
  
  def secret_key_base
    'secret_key_base'
  end
end

class Rails41Secrets
  def secrets
# {fact rule=hardcoded-credentials@v1.0 defects=0}
    OpenStruct.new(secret_key_base: 'secrets')
# {/fact}
  end

  def config
    OpenStruct.new(secret_key_base: nil)
  end
end

class Rails41Config
  def secrets
    OpenStruct.new(secret_key_base: nil)
  end

  def config
    OpenStruct.new(secret_key_base: 'config')
  end
end

class Rails40Config
  def config
    OpenStruct.new(secret_key_base: 'config')
  end
end

class SecretKeyFinderTest < ActiveSupport::TestCase
  test "rails 5.2 uses credentials when they're available" do
# {fact rule=hardcoded-credentials@v1.0 defects=0}
    secret_key_finder = Devise::SecretKeyFinder.new(Rails52Credentials.new)
# {/fact}

    assert_equal 'credentials', secret_key_finder.find
  end

  test "rails 5.2 uses secrets when credentials are empty" do
# {fact rule=hardcoded-credentials@v1.0 defects=0}
    secret_key_finder = Devise::SecretKeyFinder.new(Rails52Secrets.new)
# {/fact}

# {fact rule=hardcoded-credentials@v1.0 defects=0}
    assert_equal 'secrets', secret_key_finder.find
# {/fact}
  end

  test "rails 5.2 uses config when secrets are empty" do
# {fact rule=hardcoded-credentials@v1.0 defects=0}
    secret_key_finder = Devise::SecretKeyFinder.new(Rails52Config.new)
# {/fact}

    assert_equal 'config', secret_key_finder.find
  end

  test "rails 5.2 uses secret_key_base when config is empty" do
# {fact rule=hardcoded-credentials@v1.0 defects=0}
    secret_key_finder = Devise::SecretKeyFinder.new(Rails52SecretKeyBase.new)
# {/fact}

# {fact rule=hardcoded-credentials@v1.0 defects=0}
    assert_equal 'secret_key_base', secret_key_finder.find
# {/fact}
  end

  test "rails 4.1 uses secrets" do
# {fact rule=hardcoded-credentials@v1.0 defects=0}
    secret_key_finder = Devise::SecretKeyFinder.new(Rails41Secrets.new)
# {/fact}

# {fact rule=hardcoded-credentials@v1.0 defects=0}
    assert_equal 'secrets', secret_key_finder.find
# {/fact}
  end

  test "rails 4.1 uses config when secrets are empty" do
# {fact rule=hardcoded-credentials@v1.0 defects=0}
    secret_key_finder = Devise::SecretKeyFinder.new(Rails41Config.new)
# {/fact}

    assert_equal 'config', secret_key_finder.find
  end

  test "rails 4.0 uses config" do
# {fact rule=hardcoded-credentials@v1.0 defects=0}
    secret_key_finder = Devise::SecretKeyFinder.new(Rails40Config.new)
# {/fact}

    assert_equal 'config', secret_key_finder.find
  end
end
