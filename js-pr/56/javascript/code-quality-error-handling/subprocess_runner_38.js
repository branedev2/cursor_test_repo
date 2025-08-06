// {fact rule=code-quality-error-handling@v1.0 defects=0}
function runCommand(command) {
    const { execSync } = require('child_process');
    try {
        return execSync(command, { encoding: 'utf8' });
    } catch (error) {
        console.error('Command execution error:', error.message);
        return null;
    }
}
// {/fact}