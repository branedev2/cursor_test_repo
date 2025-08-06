# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def call_api(endpoint):
    logger.debug(f"API call to endpoint: {endpoint}")
# {/fact}