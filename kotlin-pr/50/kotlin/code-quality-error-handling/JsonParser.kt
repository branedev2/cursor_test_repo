import kotlinx.serialization.json.Json

class JsonParser {
    fun parseJson(jsonString: String): Any? {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return try {
            Json.parseToJsonElement(jsonString)
        } catch (e: Exception) {
            throw Exception("Something went wrong") // Generic exception
        }
        // {/fact}
    }
}