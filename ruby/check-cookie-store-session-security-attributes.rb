#rails2
ActionController::Base.session = {
  :key         => '_rails2_session',
# {fact rule=insecure-file-permissions@v1.0 defects=1}
  :secret      => 'secret!',
  # ruleid: check-cookie-store-session-security-attributes
  :session_http_only   => false
# {/fact}
}

# {fact rule=insecure-file-permissions@v1.0 defects=1}
#rails3
# ruleid: check-cookie-store-session-security-attributes
Rails3::Application.config.session_store :cookie_store, :key => '_rails3_session', :httponly => false, :secure => false
# {/fact}

# {fact rule=insecure-file-permissions@v1.0 defects=1}
#rails3
# ruleid: check-cookie-store-session-security-attributes
Rails3::Application.config.session_store :cookie_store, :key => '_rails3_session', :secure => false
# {/fact}

# {fact rule=insecure-file-permissions@v1.0 defects=1}
#rails3
# ruleid: check-cookie-store-session-security-attributes
Rails3::Application.config.session_store :cookie_store, :httponly => false, :key => '_rails3_session'
# {/fact}

# {fact rule=insecure-file-permissions@v1.0 defects=1}
#rails3
# ruleid: check-cookie-store-session-security-attributes
Rails.application.config.session_store :cookie_store, key: '_rails3_session', httponly: false, domain: :all
# {/fact}
# {fact rule=insecure-file-permissions@v1.0 defects=1}

# ruleid: check-cookie-store-session-security-attributes
Rails.application.config.session_store :cookie_store, httponly: false
# {/fact}
# {fact rule=insecure-file-permissions@v1.0 defects=0}

# ok: check-cookie-store-session-security-attributes
Rails.application.config.session_store :cookie_store, some_harmless_key: false
# {/fact}
# {fact rule=insecure-file-permissions@v1.0 defects=1}

# ruleid: check-cookie-store-session-security-attributes
MyRailsApp::Application.config.session_store :cookie_store, httponly: false
# {/fact}
# {fact rule=insecure-file-permissions@v1.0 defects=1}

# ruleid: check-cookie-store-session-security-attributes
MyRailsApp.application.config.session_store :cookie_store, httponly: false
# {/fact}
