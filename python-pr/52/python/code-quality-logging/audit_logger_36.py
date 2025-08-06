# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
audit_logger = logging.getLogger("audit")

def audit_action(action):
    audit_logger.info(f"User action: {action}")
# {/fact}