# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def perform_action():
    logger.info("Action completed successfully")
# {/fact}