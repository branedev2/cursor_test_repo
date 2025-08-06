// {fact rule=code-quality-naming@v1.0 defects=0}
function processCustomerOrder(customerOrder) {
    let orderConfirmation = customerOrder.generateConfirmation();
    return orderConfirmation;
}
// {/fact}