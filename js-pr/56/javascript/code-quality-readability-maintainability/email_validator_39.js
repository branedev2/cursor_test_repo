// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function isValidEmailAddress(email) {
    if (!email || typeof email !== 'string') {
        return false;
    }
    
    if (!email.includes('@')) {
        return false;
    }
    
    const [localPart, domainPart] = email.split('@');
    
    if (!localPart || !domainPart) {
        return false;
    }
    
    return isValidDomain(domainPart);
}

function isValidDomain(domain) {
    if (!domain.includes('.')) {
        return false;
    }
    
    const domainParts = domain.split('.');
    return domainParts.length >= 2 && domainParts.every(part => part.length > 0);
}
// {/fact}