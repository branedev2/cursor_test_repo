# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
business_logger = logging.getLogger("business")

def business_operation():
    business_logger.info("Business operation executed successfully")
# {/fact}