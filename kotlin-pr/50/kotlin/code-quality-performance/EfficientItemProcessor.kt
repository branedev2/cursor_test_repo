class EfficientItemProcessor {
    fun processNumbers(count: Int): List<Int> {
        // {fact rule=code-quality-performance@v1.0 defects=0}
        return List(count) { it * 2 } // Pre-allocate and populate in one step
        // {/fact}
    }
}