# {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
def build_sql_query(operation, table, data=None, condition=None):
    query_builders = {
        'select': lambda: _build_select_query(table, condition),
        'insert': lambda: _build_insert_query(table, data),
        'update': lambda: _build_update_query(table, data, condition),
        'delete': lambda: _build_delete_query(table, condition)
    }
    
    if operation not in query_builders:
        return None
    
    return query_builders[operation]()

def _build_select_query(table, condition):
    base_query = f"SELECT * FROM {table}"
    return f"{base_query} WHERE {condition}" if condition else base_query

def _build_insert_query(table, data):
    if not data:
        return None
    
    columns = ', '.join(data.keys())
    values = ', '.join([f"'{v}'" for v in data.values()])
    return f"INSERT INTO {table} ({columns}) VALUES ({values})"

def _build_update_query(table, data, condition):
    if not data or not condition:
        return None
    
    set_clause = ', '.join([f"{k}='{v}'" for k, v in data.items()])
    return f"UPDATE {table} SET {set_clause} WHERE {condition}"

def _build_delete_query(table, condition):
    return f"DELETE FROM {table} WHERE {condition}" if condition else None
# {/fact}