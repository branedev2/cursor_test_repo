# {fact rule=code-quality-error-handling@v1.0 defects=0}
def read_config(config_file):
    import configparser
    try:
        config = configparser.ConfigParser()
        config.read(config_file)
        return config
    except configparser.Error as e:
        print(f"Config error: {e}")
        return None
# {/fact}