// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function validate(data) {
    if (!data) return false;
    if (typeof data !== 'object') return false;
    if (!data.name) return false;
    if (!data.age) return false;
    if (typeof data.name !== 'string') return false;
    if (typeof data.age !== 'number') return false;
    if (data.name.length < 2) return false;
    if (data.age < 0) return false;
    if (data.age > 150) return false;
    return true;
}
// {/fact}