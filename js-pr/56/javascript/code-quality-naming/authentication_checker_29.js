// {fact rule=code-quality-naming@v1.0 defects=0}
let isUserLoggedIn = false;

function checkUserAuthenticationStatus() {
    if (isUserLoggedIn) {
        console.log("User is authenticated");
    }
}
// {/fact}