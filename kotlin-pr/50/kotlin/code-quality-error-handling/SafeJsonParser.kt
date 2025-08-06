import kotlinx.serialization.json.Json
import kotlinx.serialization.SerializationException

class SafeJsonParser {
    fun parseJson(jsonString: String): Result<Any> {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (jsonString.isBlank()) {
            return Result.failure(IllegalArgumentException("JSON string cannot be null or empty"))
        }

        return try {
            val result = Json.parseToJsonElement(jsonString)
            Result.success(result)
        } catch (ex: SerializationException) {
            Result.failure(IllegalArgumentException("Invalid JSON format: ${ex.message}", ex))
        } catch (ex: Exception) {
            Result.failure(RuntimeException("Unexpected error parsing JSON: ${ex.message}", ex))
        }
        // {/fact}
    }
}