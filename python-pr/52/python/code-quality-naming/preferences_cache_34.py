# {fact rule=code-quality-naming@v1.0 defects=0}
user_preferences_cache = {}

def get_user_preference(preference_key):
    return user_preferences_cache.get(preference_key)
# {/fact}