# {fact rule=code-quality-logging@v1.0 defects=0}
import logging
logger = logging.getLogger(__name__)

def process_payment(card_number, cvv):
    masked_card = card_number[-4:].rjust(len(card_number), '*')
    logger.info(f"Processing payment for card: {masked_card}")
# {/fact}