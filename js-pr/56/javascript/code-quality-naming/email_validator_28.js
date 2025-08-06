// {fact rule=code-quality-naming@v1.0 defects=0}
let userEmailAddress = "";

function validateEmailFormat() {
    let isValidEmail = userEmailAddress.includes("@");
    return isValidEmail;
}
// {/fact}