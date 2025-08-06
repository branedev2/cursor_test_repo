# {fact rule=code-quality-error-handling@v1.0 defects=0}
def parse_yaml(yaml_string):
    import yaml
    try:
        return yaml.safe_load(yaml_string)
    except yaml.YAMLError as e:
        print(f"YAML error: {e}")
        return None
# {/fact}