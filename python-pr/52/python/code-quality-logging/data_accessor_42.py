# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
audit_logger = logging.getLogger("audit")

def access_data(table_name):
    audit_logger.debug(f"Data access to table: {table_name}")
# {/fact}