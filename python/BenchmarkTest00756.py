#{fact rule=insecure-connection@v1.0 defects=0}

import requests

def test2_ok():
    with requests.Session() as session:
        url = "https://example.com"
        # ok: request-session-http-in-with-context
        session.post(url)

#{/fact}
