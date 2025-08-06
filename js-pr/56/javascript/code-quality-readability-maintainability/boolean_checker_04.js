// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function check(x) {
    return x === true ? true : x === false ? false : x === null ? null : typeof x === 'number' ? Boolean(x) : false;
}
// {/fact}