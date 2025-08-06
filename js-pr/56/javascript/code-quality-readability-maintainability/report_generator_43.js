// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function createDataSummaryReport(data) {
    if (!Array.isArray(data) || data.length === 0) {
        return "No data available for report generation.";
    }
    
    const reportSections = [
        "DATA SUMMARY REPORT",
        "=".repeat(50),
        `Total Items: ${data.length}`
    ];
    
    const numericFields = identifyNumericFields(data[0]);
    const fieldAverages = calculateFieldAverages(data, numericFields);
    
    fieldAverages.forEach(({ field, average }) => {
        reportSections.push(`Average ${field}: ${average.toFixed(2)}`);
    });
    
    return reportSections.join('\n');
}

function identifyNumericFields(sampleItem) {
    return Object.keys(sampleItem).filter(key => 
        typeof sampleItem[key] === 'number'
    );
}

function calculateFieldAverages(data, numericFields) {
    return numericFields.map(field => {
        const values = data
            .map(item => item[field])
            .filter(value => typeof value === 'number');
        
        const average = values.length > 0 
            ? values.reduce((sum, value) => sum + value, 0) / values.length 
            : 0;
        
        return { field, average };
    });
}
// {/fact}