import kotlin.reflect.full.memberProperties

class SafePropertyAccessor {
    fun getProperty(obj: Any?, propertyName: String?): Result<Any?> {
        // {fact rule=code-quality-error-handling@v1.0 defects=0}
        if (obj == null) {
            return Result.failure(IllegalArgumentException("Object cannot be null"))
        }

        if (propertyName.isNullOrBlank()) {
            return Result.failure(IllegalArgumentException("Property name cannot be null or empty"))
        }

        return try {
            val property = obj::class.memberProperties.find { it.name == propertyName }
                ?: return Result.failure(NoSuchFieldException("Property '$propertyName' does not exist on ${obj::class.simpleName}"))
            
            val value = property.getter.call(obj)
            Result.success(value)
        } catch (ex: Exception) {
            Result.failure(RuntimeException("Error accessing property '$propertyName': ${ex.message}", ex))
        }
        // {/fact}
    }
}