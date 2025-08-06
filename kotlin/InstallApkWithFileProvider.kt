//// {fact rule=improper-verification-of-origin-with-file-download@v1.0 defects=unknown}
//import android.app.Activity
//import android.content.Context
//import android.content.Intent
//import android.net.Uri
//import java.io.File
//
//class InstallApkWithFileProvider {
//    fun example1() {
//        val tempFilename = "temporary.apk"
//        val buffer = ByteArray(16384)
//        val assetName = "asset"
//        getAssets().open(assetName).use { `is` ->
//            openFileOutput(tempFilename, Context.MODE_PRIVATE).use { fout ->
//                var n: Int
//                while (`is`.read(buffer).also { n = it as Int } >= 0) {
//                    fout.write(buffer, 0, n)
//                }
//            }
//        }
//
//        /* Expose temporary file with FileProvider */
//        val toInstall = File(this.getFilesDir(), tempFilename)
//        val applicationUri: Uri = FileProvider.getUriForFile(this, "com.example.apkprovider", toInstall)
//
//        /* Create Intent and set data to APK file. */
//        val intent = Intent(Intent.ACTION_PACKAGE_INSTALL)
//        intent.setData(applicationUri)
//        intent.setFlags(Intent.FLAG_GRANT_READ_URI_PERMISSION)
//        startActivity(intent)
//    }
//
//    private fun openFileOutput(tempFilename: String, modePrivate: Int): Any {
//        TODO("Not yet implemented")
//    }
//
//    private fun getAssets(): Any {
//        TODO("Not yet implemented")
//    }
//
//    private fun getFilesDir(): String {
//        return "File"
//    }
//
//    private fun startActivity(intent: Intent) {
//
//    }
//}
//
//private fun Any?.write(buffer: ByteArray, i: Int, n: Int) {
//
//}
//
//private fun Any?.read(buffer: ByteArray): Int {
//
//    return 2
//}
//
//private fun Any.use(block: Function1<*, *>) {
//    TODO("Not yet implemented")
//}
//
//private fun Any.open(assetName: Any) {
//
//}
//
//class FileProvider {
//    companion object {
//        fun getUriForFile(installApkWithFileProvider: InstallApkWithFileProvider, s: String, toInstall: Any): Uri {
//            TODO("Not yet implemented")
//        }
//    }
//
//}
//// {/fact}
