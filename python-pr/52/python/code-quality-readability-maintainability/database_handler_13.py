# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def handle_db_operation(operation, table, data=None, condition=None):
    if operation == 'select':
        if condition:
            return f"SELECT * FROM {table} WHERE {condition}"
        else:
            return f"SELECT * FROM {table}"
    elif operation == 'insert':
        if data:
            columns = ', '.join(data.keys())
            values = ', '.join([f"'{v}'" for v in data.values()])
            return f"INSERT INTO {table} ({columns}) VALUES ({values})"
    elif operation == 'update':
        if data and condition:
            set_clause = ', '.join([f"{k}='{v}'" for k, v in data.items()])
            return f"UPDATE {table} SET {set_clause} WHERE {condition}"
    elif operation == 'delete':
        if condition:
            return f"DELETE FROM {table} WHERE {condition}"
    return None
# {/fact}