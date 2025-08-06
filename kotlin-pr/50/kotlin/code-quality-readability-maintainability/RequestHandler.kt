class RequestHandler {
    fun processReport(data: List<Map<String, String>>, type: String, includeHeaders: Boolean, format: String): String {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        var result = ""
        if (type == "summary") {
            if (format == "csv") {
                if (includeHeaders) result += "Name,Value\n"
                data.forEach { item ->
                    result += "${item["name"]},${item["value"]}\n"
                }
            } else if (format == "json") {
                result = "["
                data.forEachIndexed { index, item ->
                    result += "{\"name\":\"${item["name"]}\",\"value\":\"${item["value"]}\"}"
                    if (index < data.size - 1) result += ","
                }
                result += "]"
            }
        } else if (type == "detailed") {
            result = "Detailed report processing..."
        }
        return result
        // {/fact}
    }
}