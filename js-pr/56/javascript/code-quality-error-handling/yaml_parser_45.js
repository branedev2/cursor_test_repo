// {fact rule=code-quality-error-handling@v1.0 defects=0}
function parseYaml(yamlString) {
    const yaml = require('js-yaml');
    try {
        return yaml.safeLoad(yamlString);
    } catch (error) {
        console.error('YAML parsing error:', error.message);
        return null;
    }
}
// {/fact}