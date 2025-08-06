class ItemProcessor {
    fun processNumbers(count: Int): List<Int> {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        val numbers = mutableListOf<Int>()
        
        for (i in 0 until count) {
            numbers.add(i * 2)
        }
        
        return numbers
        // {/fact}
    }
}