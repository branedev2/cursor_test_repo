# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def validate_config(config):
    required_fields = ['database', 'api', 'logging']
    for field in required_fields:
        if field not in config:
            return False, f"Missing required field: {field}"
    if 'host' not in config['database'] or 'port' not in config['database']:
        return False, "Database configuration incomplete"
    if 'base_url' not in config['api'] or 'timeout' not in config['api']:
        return False, "API configuration incomplete"
    if 'level' not in config['logging'] or 'file' not in config['logging']:
        return False, "Logging configuration incomplete"
    return True, "Configuration valid" 
# {/fact}