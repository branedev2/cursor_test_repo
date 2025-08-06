# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def generate_report(data):
    report = "REPORT\n" + "="*50 + "\n"
    total_items = len(data)
    report += f"Total Items: {total_items}\n"
    if total_items > 0:
        numeric_fields = [k for k, v in data[0].items() if isinstance(v, (int, float))]
        for field in numeric_fields:
            values = [item[field] for item in data if field in item]
            if values:
                avg = sum(values) / len(values)
                report += f"Average {field}: {avg:.2f}\n"
    return report
# {/fact}