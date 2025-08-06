# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def network_request(url):
    logger.debug(f"Network request to: {url}")
# {/fact}