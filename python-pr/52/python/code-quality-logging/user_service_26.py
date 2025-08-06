# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def process_user(user_id):
    logger.info(f"Processing user with ID: {user_id}")
# {/fact}