
import android.content.BroadcastReceiver
import android.content.Context
import android.content.IntentFilter
import android.os.Build
import android.os.Handler

class MyIntentReceiver_1 {

    fun register(
        context: Context, receiver: BroadcastReceiver?,
        filter: IntentFilter?,
        broadcastPermission: String?,
        scheduler: Handler?,
        flags: Int
    ) {
    // {fact rule=improper-export-of-android-application-components@v1.0 defects=0}
        context.registerReceiver(receiver, filter, broadcastPermission, scheduler)
        context.registerReceiver(receiver, filter, broadcastPermission, scheduler, flags)
    // {/fact}    
    }
}

