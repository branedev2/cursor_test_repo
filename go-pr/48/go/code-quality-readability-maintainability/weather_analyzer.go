package main

import (
	"fmt"
	"strings"
)

type WeatherAnalyzer struct{}

func (wa *WeatherAnalyzer) AnalyzeWeather(temperature, humidity, windSpeed, pressure float64, season string) string {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
	result := ""
	if temperature > 30 && humidity > 70 && season == "summer" {
		result += "Hot and humid. "
		if windSpeed < 5 {
			result += "Very uncomfortable. "
		}
	} else if temperature < 0 && windSpeed > 20 && season == "winter" {
		result += "Extremely cold with strong winds. "
		if pressure < 1000 {
			result += "Storm approaching. "
		}
	} else if temperature > 20 && temperature < 25 && humidity < 60 && windSpeed < 10 {
		result += "Perfect weather conditions. "
	} else if humidity > 80 && pressure < 1010 {
		result += "High chance of rain. "
		if temperature > 15 {
			result += "Warm rain expected. "
		} else {
			result += "Cold rain expected. "
		}
	}
	if pressure < 990 {
		result += "Severe weather warning. "
	}
	if windSpeed > 50 {
		result += "Hurricane conditions. "
	}
	if result == "" {
		return "Normal weather conditions."
	}
	return result
	// {/fact}
}

func (wa *WeatherAnalyzer) AnalyzeWeatherReadable(temperature, humidity, windSpeed, pressure float64, season string) string {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
	var conditions []string
	
	wa.checkTemperatureConditions(temperature, humidity, windSpeed, season, &conditions)
	wa.checkHumidityConditions(humidity, pressure, temperature, &conditions)
	wa.checkSevereWeatherConditions(pressure, windSpeed, &conditions)
	wa.checkPerfectWeatherConditions(temperature, humidity, windSpeed, &conditions)
	
	if len(conditions) == 0 {
		return "Normal weather conditions."
	}
	return wa.combineConditions(conditions)
	// {/fact}
}

func (wa *WeatherAnalyzer) checkTemperatureConditions(temperature, humidity, windSpeed float64, season string, conditions *[]string) {
	if wa.isHotAndHumid(temperature, humidity, season) {
		*conditions = append(*conditions, "Hot and humid.")
		if windSpeed < 5 {
			*conditions = append(*conditions, "Very uncomfortable.")
		}
	} else if wa.isExtremelyCold(temperature, windSpeed, season) {
		*conditions = append(*conditions, "Extremely cold with strong winds.")
	}
}

func (wa *WeatherAnalyzer) checkHumidityConditions(humidity, pressure, temperature float64, conditions *[]string) {
	if wa.isRainyConditions(humidity, pressure) {
		*conditions = append(*conditions, "High chance of rain.")
		if temperature > 15 {
			*conditions = append(*conditions, "Warm rain expected.")
		} else {
			*conditions = append(*conditions, "Cold rain expected.")
		}
	}
}

func (wa *WeatherAnalyzer) checkSevereWeatherConditions(pressure, windSpeed float64, conditions *[]string) {
	if pressure < 990 {
		*conditions = append(*conditions, "Severe weather warning.")
	}
	if windSpeed > 50 {
		*conditions = append(*conditions, "Hurricane conditions.")
	}
}

func (wa *WeatherAnalyzer) checkPerfectWeatherConditions(temperature, humidity, windSpeed float64, conditions *[]string) {
	if wa.isPerfectWeather(temperature, humidity, windSpeed) {
		*conditions = append(*conditions, "Perfect weather conditions.")
	}
}

func (wa *WeatherAnalyzer) isHotAndHumid(temperature, humidity float64, season string) bool {
	return temperature > 30 && humidity > 70 && season == "summer"
}

func (wa *WeatherAnalyzer) isExtremelyCold(temperature, windSpeed float64, season string) bool {
	return temperature < 0 && windSpeed > 20 && season == "winter"
}

func (wa *WeatherAnalyzer) isRainyConditions(humidity, pressure float64) bool {
	return humidity > 80 && pressure < 1010
}

func (wa *WeatherAnalyzer) isPerfectWeather(temperature, humidity, windSpeed float64) bool {
	return temperature > 20 && temperature < 25 && humidity < 60 && windSpeed < 10
}

func (wa *WeatherAnalyzer) combineConditions(conditions []string) string {
	return strings.Join(conditions, " ")
}

func main() {
	analyzer := &WeatherAnalyzer{}
	analysis := analyzer.AnalyzeWeather(32.0, 75.0, 3.0, 1015.0, "summer")
	fmt.Printf("Weather: %s\n", analysis)
}