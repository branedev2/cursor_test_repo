class ReadableRequestHandler {
    fun processReport(data: List<Map<String, String>>, reportType: String, includeHeaders: Boolean, format: String): String {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        val processedData = getProcessedData(data, reportType)
        
        return when (format.lowercase()) {
            "csv" -> generateCsvReport(processedData, includeHeaders)
            "json" -> generateJsonReport(processedData)
            else -> throw IllegalArgumentException("Unsupported format: $format")
        }
        // {/fact}
    }

    private fun getProcessedData(data: List<Map<String, String>>, reportType: String): List<Map<String, String>> {
        return when (reportType.lowercase()) {
            "summary" -> processSummaryData(data)
            "detailed" -> processDetailedData(data)
            else -> throw IllegalArgumentException("Unsupported report type: $reportType")
        }
    }

    private fun processSummaryData(data: List<Map<String, String>>): List<Map<String, String>> {
        return data // Summary processing logic
    }

    private fun processDetailedData(data: List<Map<String, String>>): List<Map<String, String>> {
        return data // Detailed processing logic
    }

    private fun generateCsvReport(data: List<Map<String, String>>, includeHeaders: Boolean): String {
        val csv = StringBuilder()
        if (includeHeaders && data.isNotEmpty()) {
            csv.append("Name,Value\n")
        }
        
        data.forEach { item ->
            csv.append("${item["name"]},${item["value"]}\n")
        }
        
        return csv.toString()
    }

    private fun generateJsonReport(data: List<Map<String, String>>): String {
        return data.joinToString(prefix = "[", postfix = "]") { item ->
            "{\"name\":\"${item["name"]}\",\"value\":\"${item["value"]}\"}"
        }
    }
}