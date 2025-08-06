// {fact rule=code-quality-naming@v1.0 defects=1}
function validate(input) {
    let ok = input !== null;
    if (!ok) {
        throw new Error();
    }
}
// {/fact}