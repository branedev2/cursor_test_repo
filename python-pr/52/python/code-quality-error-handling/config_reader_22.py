# {fact rule=code-quality-error-handling@v1.0 defects=1}
def read_config(config_file):
    import configparser
    config = configparser.ConfigParser()
    config.read(config_file)
    return config
# {/fact}