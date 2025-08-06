// {fact rule=code-quality-performance@v1.0 defects=0}
function filterData(data, criteria) {
    return data.filter(item => 
        item.toLowerCase().includes(criteria.toLowerCase())
    );
}
// {/fact}