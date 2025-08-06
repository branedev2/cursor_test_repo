// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function handleString(s) {
    return s ? s.replace('a','b').replace('b','c').replace('c','d').replace('d','e').replace('e','f').toUpperCase().toLowerCase().trim().split(' ')[0] : "";
}
// {/fact}