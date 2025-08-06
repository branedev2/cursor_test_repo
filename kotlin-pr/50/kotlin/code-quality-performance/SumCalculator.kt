class SumCalculator {
    fun buildMessage(words: List<String>): String {
        // {fact rule=code-quality-performance@v1.0 defects=1}
        var result = ""
        
        for (i in words.indices) {
            result += words[i] + " "
        }
        
        return result.trim()
        // {/fact}
    }
}