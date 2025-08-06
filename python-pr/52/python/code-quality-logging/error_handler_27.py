# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def handle_error(error):
    logger.error(f"An error occurred", exc_info=error)
# {/fact}