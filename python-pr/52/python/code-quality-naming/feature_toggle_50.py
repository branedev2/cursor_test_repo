# {fact rule=code-quality-naming@v1.0 defects=0}
is_feature_enabled = False

def toggle_feature_availability():
    global is_feature_enabled
    is_feature_enabled = not is_feature_enabled
# {/fact}