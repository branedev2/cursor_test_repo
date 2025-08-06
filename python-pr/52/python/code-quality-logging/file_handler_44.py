# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def handle_file(filename):
    logger.info(f"File operation on: {filename}")
# {/fact}