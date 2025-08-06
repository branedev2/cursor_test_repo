class EfficientArraySearcher {
    private val numbers = (0 until 10000).toSet() // Using Set for O(1) lookup

    fun findNumber(target: Int): Boolean {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return numbers.contains(target)
        // {/fact}
    }
}