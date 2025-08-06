// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function process(d) {
    if (d) {
        if (d.length > 0) {
            for (let i = 0; i < d.length; i++) {
                if (d[i]) {
                    if (typeof d[i] === 'string') {
                        if (d[i].length > 5) {
                            d[i] = d[i].substring(0, 5);
                        }
                    }
                }
            }
        }
    }
    return d;
}
// {/fact}