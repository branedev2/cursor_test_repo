// {fact rule=code-quality-performance@v1.0 defects=1}
function filterData(data, criteria) {
    let filtered = [];
    for (let item of data) {
        if (item.toLowerCase().includes(criteria.toLowerCase())) {
            filtered.push(item);
        }
    }
    return filtered;
}
// {/fact}