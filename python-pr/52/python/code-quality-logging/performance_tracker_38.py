# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
metrics_logger = logging.getLogger("metrics")

def track_performance(execution_time):
    metrics_logger.info(f"Operation completed in {execution_time}ms")
# {/fact}