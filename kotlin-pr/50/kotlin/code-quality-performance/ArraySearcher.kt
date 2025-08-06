class ArraySearcher {
    private val numbers = (0 until 10000).toList()

    fun findNumber(target: Int): Boolean {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        numbers.forEach { number ->
            if (number == target) return true
        }
        return false
        // {/fact}
    }
}