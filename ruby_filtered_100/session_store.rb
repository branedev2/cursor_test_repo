# frozen_string_literal: true
# Be sure to restart your server when you modify this file.

# {fact rule=sensitive-cookie-without-http-only-flag@v1.0 defects=1}
Railsgoat::Application.config.session_store :cookie_store, key: "_railsgoat_session", httponly: false

# {/fact}