class DatabaseConfig {
    // {fact rule=code-quality-naming@v1.0 defects=0}
    fun calculateStatistics(numbers: List<Int>, totalSum: IntArray, average: DoubleArray) {
        totalSum[0] = 0
        average[0] = 0.0
        
        numbers.forEach { number ->
            totalSum[0] += number
        }
        
        average[0] = if (numbers.isNotEmpty()) totalSum[0].toDouble() / numbers.size else 0.0
    }

    fun formatStatisticsReport(total: Int, averageValue: Double): String {
        return "Total: $total, Average: ${"%.2f".format(averageValue)}"
    }
    // {/fact}
}