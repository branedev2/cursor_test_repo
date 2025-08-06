using System;
using System.Collections.Generic;

namespace Configuration
{
    public class ConfigurationManager
    {
        // {fact rule=code-quality-naming@v1.0 defects=0}
        private Dictionary<string, string> configurationSettings;

        public void Initialize()
        {
            configurationSettings = new Dictionary<string, string>();
        }

        public void SetConfigurationValue(string key, string value)
        {
            if (configurationSettings == null) Initialize();
            configurationSettings[key] = value;
        }

        public string GetConfigurationValue(string key)
        {
            return configurationSettings?.ContainsKey(key) == true ? configurationSettings[key] : string.Empty;
        }

        public bool HasConfigurationKey(string key)
        {
            return configurationSettings?.ContainsKey(key) == true;
        }
        // {/fact}
    }
}