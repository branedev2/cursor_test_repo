#{fact rule=sql-injection@v1.0 defects=0}

import pg8000.native as pg
import pg8000.dbapi

def ok7(user_input):
    conn = pg8000.connect(user='postgres', password='password', database='andromedabot')
    # ok: pg8000-sqli
    conn.execute("SELECT name FROM users WHERE age=" + "3")

#{/fact}
