# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def parse_structured_log_file(log_file_path):
    import re
    
    log_pattern = r'(\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}) \[(\w+)\] (.+)'
    parsed_entries = []
    
    try:
        with open(log_file_path, 'r') as file:
            for line in file:
                log_entry = _parse_log_line(line.strip(), log_pattern)
                if log_entry:
                    parsed_entries.append(log_entry)
    
    except FileNotFoundError:
        return []
    
    return parsed_entries

def _parse_log_line(line, pattern):
    match = re.match(pattern, line)
    if match:
        timestamp, level, message = match.groups()
        return {
            'timestamp': timestamp,
            'level': level,
            'message': message
        }
    return None
# {/fact}