# {fact rule=code-quality-error-handling@v1.0 defects=1}
def parse_date(date_string):
    from datetime import datetime
    return datetime.strptime(date_string, '%Y-%m-%d')
# {/fact}