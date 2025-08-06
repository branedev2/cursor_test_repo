# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def create_data_summary_report(data):
    if not data:
        return "No data available for report generation."
    
    report_lines = [
        "DATA SUMMARY REPORT",
        "=" * 50,
        f"Total Items: {len(data)}"
    ]
    
    numeric_fields = _identify_numeric_fields(data[0])
    
    for field in numeric_fields:
        field_values = _extract_field_values(data, field)
        if field_values:
            average_value = sum(field_values) / len(field_values)
            report_lines.append(f"Average {field}: {average_value:.2f}")
    
    return "\n".join(report_lines)

def _identify_numeric_fields(sample_item):
    return [key for key, value in sample_item.items() 
            if isinstance(value, (int, float))]

def _extract_field_values(data, field):
    return [item[field] for item in data if field in item and isinstance(item[field], (int, float))]
# {/fact}