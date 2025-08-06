# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
from datetime import datetime
logger = logging.getLogger(__name__)

def execute_task():
    logger.info(f"Scheduled task executed at: {datetime.now()}")
# {/fact}