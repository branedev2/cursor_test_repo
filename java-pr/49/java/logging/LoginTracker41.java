// {fact rule=logging@v1.0 defects=0}
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.time.Instant;

public class LoginTracker41 {
    private static final Logger logger = LoggerFactory.getLogger(LoginTracker41.class);
    private static final Logger auditLogger = LoggerFactory.getLogger("AUDIT");
    private static final Logger securityLogger = LoggerFactory.getLogger("SECURITY");
    private static final Logger businessLogger = LoggerFactory.getLogger("BUSINESS");
    private static final Logger metricsLogger = LoggerFactory.getLogger("METRICS");
    
    public void userLogin(String username, String ipAddress) {
        securityLogger.info("User login: {} from IP: {}", username, ipAddress);
    }
    
    private String getCurrentUser() {
        return "currentUser";
    }
    
    private void riskyOperation() {
        // Mock risky operation
    }
}
// {/fact}