// {fact rule=code-quality-performance@v1.0 defects=1}
function reverseString(str) {
    let reversed = "";
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str[i];
    }
    return reversed;
}
// {/fact}