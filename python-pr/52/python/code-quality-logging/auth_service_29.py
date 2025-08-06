# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def authenticate_user(username, password):
    logger.info(f"Authentication successful for user: {username}")
# {/fact}