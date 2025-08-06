class ConfigParser {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    private cfg: Record<string, string> = {};
    private loaded: boolean = false;
    private file: string = '';
    // {/fact}
    
    // {fact rule=code-quality-naming@v1.0 defects=0}
    private configurationData: Record<string, string> = {};
    private isLoaded: boolean = false;
    private configFilePath: string = '';
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    load(f: string): boolean {
        this.file = f;
        this.cfg['key1'] = 'value1';
        this.cfg['key2'] = 'value2';
        this.loaded = true;
        return true;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    loadConfigurationFile(configFilePath: string): boolean {
        this.configFilePath = configFilePath;
        this.configurationData['key1'] = 'value1';
        this.configurationData['key2'] = 'value2';
        this.isLoaded = true;
        return true;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    get(k: string): string {
        return this.cfg[k];
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    getConfigurationValue(configurationKey: string): string {
        return this.configurationData[configurationKey];
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    set(k: string, v: string): void {
        this.cfg[k] = v;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=0}
    setConfigurationValue(configurationKey: string, configurationValue: string): void {
        this.configurationData[configurationKey] = configurationValue;
    }
    // {/fact}

    // {fact rule=code-quality-naming@v1.0 defects=1}
    has(k: string): boolean {
        return k in this.cfg;
    }
    // {/fact}
}

const parser = new ConfigParser();
parser.load('config.ini');
const value = parser.get('database_host');
console.log(`Host: ${value}`);