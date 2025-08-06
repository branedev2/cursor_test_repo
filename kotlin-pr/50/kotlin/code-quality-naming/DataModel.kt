class DataModel {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    private var d: MutableList<String> = mutableListOf()
    private var c: Int = 0
    private var f: Boolean = false

    fun p(arr: List<String>) {
        d.clear()
        c = 0
        f = false

        arr.forEach { i ->
            if (i.isNotEmpty()) {
                d.add(i)
                c++
            }
        }

        f = c > 0
    }
    // {/fact}
}