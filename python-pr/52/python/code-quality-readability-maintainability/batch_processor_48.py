# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def process_items_in_batches(items, batch_size=10):
    all_results = []
    
    for batch_start in range(0, len(items), batch_size):
        batch_end = batch_start + batch_size
        current_batch = items[batch_start:batch_end]
        
        batch_results = _process_single_batch(current_batch)
        all_results.extend(batch_results)
    
    return all_results

def _process_single_batch(batch_items):
    batch_results = []
    
    for item in batch_items:
        try:
            processed_item = process_item(item)
            batch_results.append(processed_item)
        except Exception as error:
            batch_results.append({'error': str(error)})
    
    return batch_results
# {/fact}