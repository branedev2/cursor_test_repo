# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
class CacheManager:
    def __init__(self, max_size=100):
        self.cache = {}
        self.max_size = max_size
        self.access_count = {}
    def get(self, key):
        if key in self.cache:
            self.access_count[key] = self.access_count.get(key, 0) + 1
            return self.cache[key]
        return None
    def set(self, key, value):
        if len(self.cache) >= self.max_size:
            least_used = min(self.access_count, key=self.access_count.get)
            del self.cache[least_used]
            del self.access_count[least_used]
        self.cache[key] = value
        self.access_count[key] = 1
# {/fact}