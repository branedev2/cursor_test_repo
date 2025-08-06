// {fact rule=code-quality-naming@v1.0 defects=0}
function transformCustomerDataFormat(rawCustomerData) {
    let normalizedData = rawCustomerData.replace(/[^a-zA-Z0-9]/g, '');
    return normalizedData;
}
// {/fact}