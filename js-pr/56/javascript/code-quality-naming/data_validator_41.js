// {fact rule=code-quality-naming@v1.0 defects=0}
function executeCustomerDataValidation(customerInputData) {
    let sanitizedInput = customerInputData.toLowerCase().trim();
    return sanitizedInput;
}
// {/fact}