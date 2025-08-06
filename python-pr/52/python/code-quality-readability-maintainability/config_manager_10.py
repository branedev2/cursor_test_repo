# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def load_config(config_file):
    import json
    try:
        with open(config_file) as f:
            config = json.load(f)
            if 'database' in config:
                if 'host' in config['database'] and 'port' in config['database'] and 'name' in config['database']:
                    return config
            return None
    except:
        return None
# {/fact}