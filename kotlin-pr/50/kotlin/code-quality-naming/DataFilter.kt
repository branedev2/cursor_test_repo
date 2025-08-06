class DataFilter {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    fun m1(l: List<Int>, r1: IntArray, r2: DoubleArray) {
        r1[0] = 0
        r2[0] = 0.0
        
        l.forEach { x ->
            r1[0] += x
        }
        
        r2[0] = if (l.isNotEmpty()) r1[0].toDouble() / l.size else 0.0
    }

    fun m2(v1: Int, v2: Double): String {
        return "T: $v1, A: ${"%.2f".format(v2)}"
    }
    // {/fact}
}