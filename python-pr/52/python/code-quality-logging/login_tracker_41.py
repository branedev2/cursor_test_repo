# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
security_logger = logging.getLogger("security")

def track_login(username, ip_address):
    security_logger.info(f"User login: {username} from IP: {ip_address}")
# {/fact}