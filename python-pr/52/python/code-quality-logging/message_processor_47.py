# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def process_message(message):
    logger.info(f"Message processed: {len(message)} characters")
# {/fact}