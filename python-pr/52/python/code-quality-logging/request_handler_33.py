# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def handle_request(request_data):
    logger.debug(f"Processing request of size: {len(str(request_data))}")
# {/fact}