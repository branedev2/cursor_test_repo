class ItemManager {
    // {fact rule=code-quality-naming@v1.0 defects=1}
    private var stuff: MutableMap<String, String>? = null

    fun doThing(thing1: String, thing2: String): Boolean {
        if (stuff == null) {
            stuff = mutableMapOf()
        }

        val temp = thing1 + thing2
        stuff!![thing1] = temp
        
        return stuff!!.containsKey(thing1)
    }

    fun getThing(key: String): String? {
        return stuff?.get(key)
    }
    // {/fact}
}