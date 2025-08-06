class WeatherAnalyzer {
    analyzeWeather(temperature: number, humidity: number, windSpeed: number, pressure: number, season: string): string {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        let result = '';
        if (temperature > 30 && humidity > 70 && season === 'summer') {
            result += 'Hot and humid. ';
            if (windSpeed < 5) {
                result += 'Very uncomfortable. ';
            }
        } else if (temperature < 0 && windSpeed > 20 && season === 'winter') {
            result += 'Extremely cold with strong winds. ';
            if (pressure < 1000) {
                result += 'Storm approaching. ';
            }
        } else if (temperature > 20 && temperature < 25 && humidity < 60 && windSpeed < 10) {
            result += 'Perfect weather conditions. ';
        } else if (humidity > 80 && pressure < 1010) {
            result += 'High chance of rain. ';
            if (temperature > 15) {
                result += 'Warm rain expected. ';
            } else {
                result += 'Cold rain expected. ';
            }
        }
        if (pressure < 990) {
            result += 'Severe weather warning. ';
        }
        if (windSpeed > 50) {
            result += 'Hurricane conditions. ';
        }
        return result || 'Normal weather conditions.';
        // {/fact}
    }

    analyzeWeatherReadable(temperature: number, humidity: number, windSpeed: number, pressure: number, season: string): string {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        const conditions: string[] = [];
        
        this.checkTemperatureConditions(temperature, humidity, windSpeed, season, conditions);
        this.checkHumidityConditions(humidity, pressure, temperature, conditions);
        this.checkSevereWeatherConditions(pressure, windSpeed, conditions);
        this.checkPerfectWeatherConditions(temperature, humidity, windSpeed, conditions);
        
        return conditions.length === 0 ? 'Normal weather conditions.' : conditions.join(' ');
        // {/fact}
    }

    private checkTemperatureConditions(temperature: number, humidity: number, windSpeed: number, season: string, conditions: string[]): void {
        if (this.isHotAndHumid(temperature, humidity, season)) {
            conditions.push('Hot and humid.');
            if (windSpeed < 5) {
                conditions.push('Very uncomfortable.');
            }
        } else if (this.isExtremelyCold(temperature, windSpeed, season)) {
            conditions.push('Extremely cold with strong winds.');
        }
    }

    private checkHumidityConditions(humidity: number, pressure: number, temperature: number, conditions: string[]): void {
        if (this.isRainyConditions(humidity, pressure)) {
            conditions.push('High chance of rain.');
            if (temperature > 15) {
                conditions.push('Warm rain expected.');
            } else {
                conditions.push('Cold rain expected.');
            }
        }
    }

    private checkSevereWeatherConditions(pressure: number, windSpeed: number, conditions: string[]): void {
        if (pressure < 990) {
            conditions.push('Severe weather warning.');
        }
        if (windSpeed > 50) {
            conditions.push('Hurricane conditions.');
        }
    }

    private checkPerfectWeatherConditions(temperature: number, humidity: number, windSpeed: number, conditions: string[]): void {
        if (this.isPerfectWeather(temperature, humidity, windSpeed)) {
            conditions.push('Perfect weather conditions.');
        }
    }

    private isHotAndHumid(temperature: number, humidity: number, season: string): boolean {
        return temperature > 30 && humidity > 70 && season === 'summer';
    }

    private isExtremelyCold(temperature: number, windSpeed: number, season: string): boolean {
        return temperature < 0 && windSpeed > 20 && season === 'winter';
    }

    private isRainyConditions(humidity: number, pressure: number): boolean {
        return humidity > 80 && pressure < 1010;
    }

    private isPerfectWeather(temperature: number, humidity: number, windSpeed: number): boolean {
        return temperature > 20 && temperature < 25 && humidity < 60 && windSpeed < 10;
    }
}

const analyzer = new WeatherAnalyzer();
const analysis = analyzer.analyzeWeather(32.0, 75.0, 3.0, 1015.0, 'summer');
console.log(`Weather: ${analysis}`);