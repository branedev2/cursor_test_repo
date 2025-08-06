class ConfigManager {
    private config: Record<string, string> = {};

    loadConfiguration(filename: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        this.config['db_password'] = 'admin123';
        this.config['api_key'] = 'sk-1234567890abcdef';
        this.config['encryption_key'] = 'secret_key_xyz';
        
        Object.entries(this.config).forEach(([key, value]) => {
            console.log(`Loaded config: ${key} = ${value}`);
        });
        // {/fact}
    }

    secureLoadConfiguration(filename: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        this.config['db_password'] = 'admin123';
        this.config['api_key'] = 'sk-1234567890abcdef';
        this.config['encryption_key'] = 'secret_key_xyz';
        
        console.log(`Configuration loaded from ${filename}`);
        console.log(`Loaded ${Object.keys(this.config).length} configuration parameters`);
        // {/fact}
    }

    getConfig(key: string): string {
        return this.config[key];
    }

    logConfigAccess(key: string, value: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Accessing config: ${key} = ${value}`);
        // {/fact}
    }

    secureLogConfigAccess(key: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Configuration accessed: ${key}`);
        // {/fact}
    }

    updateConfig(key: string, value: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=1}
        console.log(`Updating config ${key}: ${this.config[key]} -> ${value}`);
        this.config[key] = value;
        // {/fact}
    }

    secureUpdateConfig(key: string, value: string): void {
        // {fact rule=code-quality-logging@v1.0 defects=0}
        console.log(`Configuration updated: ${key}`);
        this.config[key] = value;
        // {/fact}
    }
}

const manager = new ConfigManager();
manager.loadConfiguration('app.conf');