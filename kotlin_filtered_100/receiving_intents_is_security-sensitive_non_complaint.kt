import android.content.BroadcastReceiver
import android.content.Context
import android.content.IntentFilter
import android.os.Build
import android.os.Handler

class MyIntentReceiver {
    fun register(
        context: Context, receiver: BroadcastReceiver?,
        filter: IntentFilter?,
        scheduler: Handler?,
        flags: Int
    ) {
    // {fact rule=improper-export-of-android-application-components@v1.0 defects=1}
        context.registerReceiver(receiver, filter) // Sensitive
        context.registerReceiver(receiver, filter, flags) // Sensitive

        // Broadcasting intent with "null" for broadcastPermission
        context.registerReceiver(receiver, filter, null, scheduler) // Sensitive
        context.registerReceiver(receiver, filter, null, scheduler, flags) // Sensitive
    // {/fact}
    }
}

