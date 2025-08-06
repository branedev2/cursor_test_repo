# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
class LRUCache:
    def __init__(self, max_size=100):
        self.cache = {}
        self.access_counts = {}
        self.max_size = max_size
    
    def get(self, key):
        if key in self.cache:
            self._update_access_count(key)
            return self.cache[key]
        return None
    
    def set(self, key, value):
        if len(self.cache) >= self.max_size:
            self._evict_least_used_item()
        
        self.cache[key] = value
        self.access_counts[key] = 1
    
    def _update_access_count(self, key):
        self.access_counts[key] = self.access_counts.get(key, 0) + 1
    
    def _evict_least_used_item(self):
        least_used_key = min(self.access_counts, key=self.access_counts.get)
        del self.cache[least_used_key]
        del self.access_counts[least_used_key]
# {/fact}