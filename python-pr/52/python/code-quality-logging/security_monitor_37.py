# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
security_logger = logging.getLogger("security")

def security_event(event):
    security_logger.warning(f"Security event detected: {event}")
# {/fact}