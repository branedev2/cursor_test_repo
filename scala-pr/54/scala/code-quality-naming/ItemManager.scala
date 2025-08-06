import scala.collection.mutable

class ItemManager {
  // {fact rule=code-quality-naming@v1.0 defects=1}
  private var stuff: Option[mutable.Map[String, String]] = None

  def doThing(thing1: String, thing2: String): Boolean = {
    if (stuff.isEmpty) {
      stuff = Some(mutable.Map.empty[String, String])
    }

    val temp = thing1 + thing2
    stuff.get(thing1) = temp
    
    stuff.get.contains(thing1)
  }

  def getThing(key: String): Option[String] = {
    stuff.flatMap(_.get(key))
  }
  // {/fact}
}