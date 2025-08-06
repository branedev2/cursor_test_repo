# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def load_application_config(config_file):
    import json
    
    try:
        with open(config_file, 'r') as file:
            config = json.load(file)
        
        if not _is_valid_config(config):
            return None
        
        return config
    
    except (FileNotFoundError, json.JSONDecodeError):
        return None

def _is_valid_config(config):
    if 'database' not in config:
        return False
    
    database_config = config['database']
    required_db_fields = ['host', 'port', 'name']
    
    return all(field in database_config for field in required_db_fields)
# {/fact}