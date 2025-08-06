// {fact rule=code-quality-naming@v1.0 defects=0}
function validateCustomerInput(customerInput) {
    let isInputValid = customerInput !== null && customerInput.length > 0;
    if (!isInputValid) {
        throw new Error("Invalid customer input");
    }
}
// {/fact}