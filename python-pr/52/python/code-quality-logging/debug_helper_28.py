# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def debug_info(data):
    logger.debug(f"Debug information: {type(data).__name__}")
# {/fact}