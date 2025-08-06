# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def cache_operation(key):
    logger.debug(f"Cache operation for key: {key}")
# {/fact}