import * as fs from 'fs';

interface Config {
    databaseHost: string;
    databasePort: number;
    timeout: number;
}

class ConfigLoader {
    private config: Config = {} as Config;

    loadConfig(filename: string): void {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        const data = fs.readFileSync(filename, 'utf8');
        this.config = JSON.parse(data);
        // {/fact}
    }

    safeLoadConfig(filename: string): void {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!filename) {
            throw new Error('Filename cannot be empty');
        }
        
        try {
            const data = fs.readFileSync(filename, 'utf8');
            const parsedConfig = JSON.parse(data) as Config;
            
            if (!parsedConfig.databaseHost) {
                throw new Error('database_host is required');
            }
            
            if (!parsedConfig.databasePort || parsedConfig.databasePort <= 0) {
                throw new Error('Valid database_port is required');
            }
            
            this.config = parsedConfig;
        } catch (error) {
            throw new Error(`Failed to load config: ${error}`);
        }
        // {/fact}
    }

    getValue(key: keyof Config): string | number {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return this.config[key];
        // {/fact}
    }

    safeGetValue(key: keyof Config): string | number {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (!this.config || Object.keys(this.config).length === 0) {
            throw new Error('Configuration not loaded');
        }
        
        const value = this.config[key];
        if (value === undefined || value === null) {
            throw new Error(`Configuration key '${key}' not found`);
        }
        
        return value;
        // {/fact}
    }

    getIntValue(key: keyof Config): number {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        const value = this.getValue(key);
        return parseInt(value as string);
        // {/fact}
    }
}

const loader = new ConfigLoader();
loader.loadConfig('config.json');
const host = loader.getValue('databaseHost');
console.log(`Host: ${host}`);