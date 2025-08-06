# {fact rule=code-quality-error-handling@v1.0 defects=0}
def parse_date(date_string):
    from datetime import datetime
    try:
        return datetime.strptime(date_string, '%Y-%m-%d')
    except ValueError as e:
        print(f"Date parsing error: {e}")
        return None
# {/fact}