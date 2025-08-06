import scala.collection.mutable

class UserFilter {
  // {fact rule=code-quality-naming@v1.0 defects=0}
  private var userCredentials: Option[mutable.Map[String, String]] = None

  def storeUserCredentials(username: String, password: String): Boolean = {
    if (userCredentials.isEmpty) {
      userCredentials = Some(mutable.Map.empty[String, String])
    }

    val hashedPassword = username + password // Simplified hashing
    userCredentials.get(username) = hashedPassword
    
    userCredentials.get.contains(username)
  }

  def getUserCredentials(username: String): Option[String] = {
    userCredentials.flatMap(_.get(username))
  }
  // {/fact}
}