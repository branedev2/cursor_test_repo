import android.content.BroadcastReceiver
import android.content.Context
import android.content.Intent
import android.os.Bundle
import android.os.Handler
import android.os.UserHandle

public class MyIntentBroadcast {
    fun broadcast(intent: Intent,
                  context: Context,
                  user: UserHandle,
                  resultReceiver: BroadcastReceiver,
                  scheduler: Handler,
                  initialCode: Int,
                  initialData: String,
                  initialExtras: Bundle,
                  broadcastPermission: String) {
    // {fact rule=use-of-implicit-intent-for-sensitive-communication@v1.0 defects=1}
        context.sendBroadcast(intent) // Sensitive
        context.sendBroadcastAsUser(intent, user) // Sensitive

        // Broadcasting intent with "null" for receiverPermission
        context.sendBroadcast(intent, null) // Sensitive
        context.sendBroadcastAsUser(intent, user, null) // Sensitive
        context.sendOrderedBroadcast(intent, null) // Sensitive
        context.sendOrderedBroadcastAsUser(intent, user, null, resultReceiver,
            scheduler, initialCode, initialData, initialExtras) // Sensitive
    // {/fact}
    }
}
