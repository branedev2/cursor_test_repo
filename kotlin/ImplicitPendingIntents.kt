// {fact rule=use-of-impersonation-without-disclosure@v1.0 defects=0}
import android.app.Activity
import android.app.PendingIntent
import android.content.Intent
import android.os.Bundle

class ImplicitPendingIntents : Activity() {
    override fun onCreate(savedInstance: Bundle?) {
        run {

            // BAD: an implicit Intent is used to create a PendingIntent.
            // The PendingIntent is then added to another implicit Intent
            // and started.
            val baseIntent = Intent()
            val pi: PendingIntent = PendingIntent.getActivity(this, 0, baseIntent, PendingIntent.FLAG_ONE_SHOT)
            val fwdIntent = Intent("SOME_ACTION")
            fwdIntent.putExtra("fwdIntent", pi)
            sendBroadcast(fwdIntent)
        }
        run {

            // GOOD: both the PendingIntent and the wrapping Intent are explicit.
            val safeIntent = Intent(this, AnotherActivity::class.java)
            val pi: PendingIntent = PendingIntent.getActivity(this, 0, safeIntent, PendingIntent.FLAG_ONE_SHOT)
            val fwdIntent = Intent()
            fwdIntent.setClassName("destination.package", "DestinationClass")
            fwdIntent.putExtra("fwdIntent", pi)
            startActivity(fwdIntent)
        }
        run {

            // GOOD: The PendingIntent is created with FLAG_IMMUTABLE.
            val baseIntent = Intent("SOME_ACTION")
            val pi: PendingIntent = PendingIntent.getActivity(this, 0, baseIntent, PendingIntent.FLAG_NO_CREATE)
            val fwdIntent = Intent()
            fwdIntent.setClassName("destination.package", "DestinationClass")
            fwdIntent.putExtra("fwdIntent", pi)
            startActivity(fwdIntent)
        }
    }
}

class AnotherActivity {

}
// {/fact}
