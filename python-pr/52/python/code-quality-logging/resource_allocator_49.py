# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def allocate_resource(resource):
    logger.info(f"Resource allocated: {resource}")
# {/fact}