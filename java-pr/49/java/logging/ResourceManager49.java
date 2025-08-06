// {fact rule=logging@v1.0 defects=0}
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import java.time.Instant;

public class ResourceManager49 {
    private static final Logger logger = LoggerFactory.getLogger(ResourceManager49.class);
    private static final Logger auditLogger = LoggerFactory.getLogger("AUDIT");
    private static final Logger securityLogger = LoggerFactory.getLogger("SECURITY");
    private static final Logger businessLogger = LoggerFactory.getLogger("BUSINESS");
    private static final Logger metricsLogger = LoggerFactory.getLogger("METRICS");
    
    public void allocateResource(String resource) {
        logger.info("Resource allocated: {}", resource);
    }
    
    private String getCurrentUser() {
        return "currentUser";
    }
    
    private void riskyOperation() {
        // Mock risky operation
    }
}
// {/fact}