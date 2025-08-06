# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def parse_log_file(log_file):
    import re
    with open(log_file) as f:
        lines = f.readlines()
    parsed = []
    for line in lines:
        match = re.match(r'(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) \[(\w+)\] (.+)', line)
        if match:
            timestamp, level, message = match.groups()
            parsed.append({'timestamp': timestamp, 'level': level, 'message': message})
    return parsed
# {/fact}