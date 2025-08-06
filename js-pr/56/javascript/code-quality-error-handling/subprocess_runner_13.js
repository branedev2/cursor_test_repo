// {fact rule=code-quality-error-handling@v1.0 defects=1}
function runCommand(command) {
    const { execSync } = require('child_process');
    return execSync(command);
}
// {/fact}