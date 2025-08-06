import scala.reflect.runtime.universe._
import scala.util.Try

class SafePropertyAccessor {
  def getProperty(obj: Any, propertyName: String): Try[Any] = {
    // {fact rule=code-quality-error-handling@v1.0 defects=0}
    if (obj == null) {
      return Try(throw new IllegalArgumentException("Object cannot be null"))
    }

    if (propertyName == null || propertyName.isEmpty) {
      return Try(throw new IllegalArgumentException("Property name cannot be null or empty"))
    }

    Try {
      val mirror = runtimeMirror(obj.getClass.getClassLoader)
      val instanceMirror = mirror.reflect(obj)
      val symbol = instanceMirror.symbol.typeSignature.member(TermName(propertyName))
      
      if (symbol == NoSymbol) {
        throw new NoSuchFieldException(s"Property '$propertyName' does not exist on ${obj.getClass.getSimpleName}")
      }
      
      val fieldMirror = instanceMirror.reflectField(symbol.asTerm)
      fieldMirror.get
    }
    // {/fact}
  }
}