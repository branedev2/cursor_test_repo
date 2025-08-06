class UserProfile {
    // {fact rule=code-quality-naming@v1.0 defects=0}
    private var processedData: MutableList<String> = mutableListOf()
    private var validItemCount: Int = 0
    private var hasValidItems: Boolean = false

    fun processStringArray(inputArray: List<String>) {
        processedData.clear()
        validItemCount = 0
        hasValidItems = false

        inputArray.forEach { inputItem ->
            if (inputItem.isNotEmpty()) {
                processedData.add(inputItem)
                validItemCount++
            }
        }

        hasValidItems = validItemCount > 0
    }
    // {/fact}
}