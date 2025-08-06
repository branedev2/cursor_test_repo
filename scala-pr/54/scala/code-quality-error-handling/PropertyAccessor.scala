import scala.reflect.runtime.universe._

class PropertyAccessor {
  def getProperty(obj: Any, propertyName: String): Any = {
    // {fact rule=code-quality-error-handling@v1.0 defects=1}
    try {
      val mirror = runtimeMirror(obj.getClass.getClassLoader)
      val instanceMirror = mirror.reflect(obj)
      val symbol = instanceMirror.symbol.typeSignature.member(TermName(propertyName))
      val fieldMirror = instanceMirror.reflectField(symbol.asTerm)
      fieldMirror.get
    } catch {
      case _: Exception => // Silent failure
    }
    // {/fact}
  }
}