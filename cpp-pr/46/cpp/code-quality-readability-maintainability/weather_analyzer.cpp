#include <iostream>
#include <vector>
#include <string>

class WeatherAnalyzer {
public:
    std::string analyzeWeather(double temperature, double humidity, double windSpeed, double pressure, const std::string& season) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        std::string result = "";
        if (temperature > 30 && humidity > 70 && season == "summer") {
            result += "Hot and humid. ";
            if (windSpeed < 5) result += "Very uncomfortable. ";
        } else if (temperature < 0 && windSpeed > 20 && season == "winter") {
            result += "Extremely cold with strong winds. ";
            if (pressure < 1000) result += "Storm approaching. ";
        } else if (temperature > 20 && temperature < 25 && humidity < 60 && windSpeed < 10) {
            result += "Perfect weather conditions. ";
        } else if (humidity > 80 && pressure < 1010) {
            result += "High chance of rain. ";
            if (temperature > 15) result += "Warm rain expected. ";
            else result += "Cold rain expected. ";
        }
        if (pressure < 990) result += "Severe weather warning. ";
        if (windSpeed > 50) result += "Hurricane conditions. ";
        return result.empty() ? "Normal weather conditions." : result;
        // {/fact}
    }
    
    std::string analyzeWeatherReadable(double temperature, double humidity, double windSpeed, double pressure, const std::string& season) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        std::vector<std::string> conditions;
        
        checkTemperatureConditions(temperature, humidity, windSpeed, season, conditions);
        checkHumidityConditions(humidity, pressure, temperature, conditions);
        checkSevereWeatherConditions(pressure, windSpeed, conditions);
        checkPerfectWeatherConditions(temperature, humidity, windSpeed, conditions);
        
        return conditions.empty() ? "Normal weather conditions." : combineConditions(conditions);
        // {/fact}
    }
    
private:
    void checkTemperatureConditions(double temperature, double humidity, double windSpeed, const std::string& season, std::vector<std::string>& conditions) {
        if (isHotAndHumid(temperature, humidity, season)) {
            conditions.push_back("Hot and humid.");
            if (windSpeed < 5) {
                conditions.push_back("Very uncomfortable.");
            }
        } else if (isExtremelyCold(temperature, windSpeed, season)) {
            conditions.push_back("Extremely cold with strong winds.");
        }
    }
    
    void checkHumidityConditions(double humidity, double pressure, double temperature, std::vector<std::string>& conditions) {
        if (isRainyConditions(humidity, pressure)) {
            conditions.push_back("High chance of rain.");
            conditions.push_back(temperature > 15 ? "Warm rain expected." : "Cold rain expected.");
        }
    }
    
    void checkSevereWeatherConditions(double pressure, double windSpeed, std::vector<std::string>& conditions) {
        if (pressure < 990) {
            conditions.push_back("Severe weather warning.");
        }
        if (windSpeed > 50) {
            conditions.push_back("Hurricane conditions.");
        }
    }
    
    void checkPerfectWeatherConditions(double temperature, double humidity, double windSpeed, std::vector<std::string>& conditions) {
        if (isPerfectWeather(temperature, humidity, windSpeed)) {
            conditions.push_back("Perfect weather conditions.");
        }
    }
    
    bool isHotAndHumid(double temperature, double humidity, const std::string& season) {
        return temperature > 30 && humidity > 70 && season == "summer";
    }
    
    bool isExtremelyCold(double temperature, double windSpeed, const std::string& season) {
        return temperature < 0 && windSpeed > 20 && season == "winter";
    }
    
    bool isRainyConditions(double humidity, double pressure) {
        return humidity > 80 && pressure < 1010;
    }
    
    bool isPerfectWeather(double temperature, double humidity, double windSpeed) {
        return temperature > 20 && temperature < 25 && humidity < 60 && windSpeed < 10;
    }
    
    std::string combineConditions(const std::vector<std::string>& conditions) {
        std::string result;
        for (const auto& condition : conditions) {
            result += condition + " ";
        }
        return result;
    }
};

int main() {
    WeatherAnalyzer analyzer;
    std::string analysis = analyzer.analyzeWeather(32.0, 75.0, 3.0, 1015.0, "summer");
    std::cout << "Weather: " << analysis << std::endl;
    return 0;
}