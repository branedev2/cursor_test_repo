// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function generateReport(data) {
    let report = "REPORT\n" + "=".repeat(50) + "\n";
    let totalItems = data.length;
    report += `Total Items: ${totalItems}\n`;
    if (totalItems > 0) {
        let numericFields = Object.keys(data[0]).filter(k => typeof data[0][k] === 'number');
        for (let field of numericFields) {
            let values = data.map(item => item[field]).filter(v => typeof v === 'number');
            if (values.length > 0) {
                let avg = values.reduce((sum, v) => sum + v, 0) / values.length;
                report += `Average ${field}: ${avg.toFixed(2)}\n`;
            }
        }
    }
    return report;
}
// {/fact}