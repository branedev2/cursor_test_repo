# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def risky_operation():
    try:
        dangerous_function()
    except Exception as e:
        logger.error("Operation failed", exc_info=e)
        raise
# {/fact}