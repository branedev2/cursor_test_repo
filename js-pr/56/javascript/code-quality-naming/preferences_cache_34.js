// {fact rule=code-quality-naming@v1.0 defects=0}
let userPreferencesCache = {};

function getUserPreference(preferenceKey) {
    return userPreferencesCache[preferenceKey];
}
// {/fact}