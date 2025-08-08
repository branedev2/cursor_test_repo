
import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.UserHandle

public class MyIntentBroadcast_1 {
    fun broadcast(intent: Intent,
                  context: Context,
                  user: UserHandle,
                  resultReceiver: BroadcastReceiver,
                  scheduler: Handler,
                  initialCode: Int,
                  initialData: String,
                  initialExtras: Bundle,
                  broadcastPermission: String) {
    // {fact rule=use-of-implicit-intent-for-sensitive-communication@v1.0 defects=0}
        context.sendBroadcast(intent, broadcastPermission)
        context.sendBroadcastAsUser(intent, user, broadcastPermission)
        context.sendOrderedBroadcast(intent, broadcastPermission)
        context.sendOrderedBroadcastAsUser(intent, user,broadcastPermission, resultReceiver,
            scheduler, initialCode, initialData, initialExtras)
    // {/fact}
    }
}

