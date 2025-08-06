class UserProfile {
  // {fact rule=code-quality-naming@v1.0 defects=0}
  private var processedData: List[String] = List.empty
  private var validItemCount: Int = 0
  private var hasValidItems: Boolean = false

  def processStringArray(inputArray: List[String]): Unit = {
    processedData = List.empty
    validItemCount = 0
    hasValidItems = false

    inputArray.foreach { inputItem =>
      if (inputItem.nonEmpty) {
        processedData = processedData :+ inputItem
        validItemCount += 1
      }
    }

    hasValidItems = validItemCount > 0
  }
  // {/fact}
}