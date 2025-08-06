// {fact rule=code-quality-error-handling@v1.0 defects=1}
function parseYaml(yamlString) {
    const yaml = require('js-yaml');
    return yaml.load(yamlString);
}
// {/fact}