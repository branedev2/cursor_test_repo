// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function validateUserData(userData) {
    if (!userData || typeof userData !== 'object') {
        return false;
    }
    
    const requiredFields = ['name', 'age'];
    const hasAllFields = requiredFields.every(field => field in userData);
    
    if (!hasAllFields) {
        return false;
    }
    
    const { name, age } = userData;
    
    const isValidName = typeof name === 'string' && name.length >= 2;
    const isValidAge = typeof age === 'number' && age >= 0 && age <= 150;
    
    return isValidName && isValidAge;
}
// {/fact}