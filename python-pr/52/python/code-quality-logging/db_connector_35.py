# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def connect_database(connection_string):
    logger.info("Establishing database connection")
# {/fact}