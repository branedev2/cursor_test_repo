//// {fact rule=use-of-externally-controlled-input-to-select-classes-or-code@v1.0 defects=1}
//internal class UnsafeActivity : PreferenceActivity() {
//    protected fun isValidFragment(fragmentName: String?): Boolean {
//        // BAD: any Fragment name can be provided.
//        return true
//    }
//}
//
//internal class SafeActivity : PreferenceActivity() {
//    protected fun isValidFragment(fragmentName: String): Boolean {
//        // Good: only trusted Fragment names are allowed.
//        return SafeFragment1::class.java.getName() == fragmentName || SafeFragment2::class.java.getName() == fragmentName || SafeFragment3::class.java.getName() == fragmentName
//    }
//}
//// {/fact}
