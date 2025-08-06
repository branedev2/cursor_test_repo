import kotlin.reflect.full.memberProperties

class PropertyAccessor {
    fun getProperty(obj: Any, propertyName: String): Any? {
        // {fact rule=code-quality-error-handling@v1.0 defects=1}
        return try {
            val property = obj::class.memberProperties.find { it.name == propertyName }
            property?.getter?.call(obj)
        } catch (e: Exception) {
            null // Silent failure
        }
        // {/fact}
    }
}