# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def validate_application_config(config):
    validation_rules = {
        'database': ['host', 'port'],
        'api': ['base_url', 'timeout'],
        'logging': ['level', 'file']
    }
    
    for section, required_fields in validation_rules.items():
        validation_result = _validate_config_section(config, section, required_fields)
        if not validation_result[0]:
            return validation_result
    
    return True, "Configuration is valid"

def _validate_config_section(config, section_name, required_fields):
    if section_name not in config:
        return False, f"Missing required section: {section_name}"
    
    section_config = config[section_name]
    
    for field in required_fields:
        if field not in section_config:
            return False, f"{section_name.title()} configuration missing field: {field}"
    
    return True, f"{section_name.title()} configuration is valid" 
# {/fact}