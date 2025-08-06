// {fact rule=code-quality-logging@v1.0 defects=1}
function trackLogin(username, ipAddress) {
    console.log(`Login: ${username} from ${ipAddress}`);
}
// {/fact}