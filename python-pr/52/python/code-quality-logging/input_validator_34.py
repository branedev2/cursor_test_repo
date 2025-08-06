# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def validate_input(user_input):
    if not user_input:
        logger.warning("Empty input received for validation")
# {/fact}