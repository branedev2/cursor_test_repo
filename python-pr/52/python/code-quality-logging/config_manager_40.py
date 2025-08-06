# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
audit_logger = logging.getLogger("audit")

def update_config(config_data):
    audit_logger.info(f"Configuration updated")
# {/fact}