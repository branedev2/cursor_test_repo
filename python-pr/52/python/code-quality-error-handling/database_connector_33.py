# {fact rule=code-quality-error-handling@v1.0 defects=0}
def connect_db(connection_string):
    import sqlite3
    try:
        conn = sqlite3.connect(connection_string)
        return conn
    except sqlite3.Error as e:
        print(f"Database error: {e}")
        return None
# {/fact}