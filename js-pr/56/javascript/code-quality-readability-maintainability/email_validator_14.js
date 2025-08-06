// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function validateEmail(email) {
    if (!email) return false;
    if (!email.includes('@')) return false;
    let parts = email.split('@');
    if (parts.length !== 2) return false;
    let [local, domain] = parts;
    if (!local || !domain) return false;
    if (!domain.includes('.')) return false;
    let domainParts = domain.split('.');
    if (domainParts.length < 2) return false;
    for (let part of domainParts) {
        if (!part) return false;
    }
    return true;
}
// {/fact}