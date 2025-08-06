# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def process_batch(items, batch_size=10):
    results = []
    for i in range(0, len(items), batch_size):
        batch = items[i:i+batch_size]
        batch_result = []
        for item in batch:
            try:
                processed = process_item(item)
                batch_result.append(processed)
            except Exception as e:
                batch_result.append({'error': str(e)})
        results.extend(batch_result)
    return results
# {/fact}