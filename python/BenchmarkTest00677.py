#{fact rule=insecure-cookie@v1.0 defects=1}


def test2():
    from flask import make_response
    r = make_response()
    # some values are set but not others

    # ruleid:secure-set-cookie
    r.set_cookie("cookie1", "cookie_value", secure=True)
    # ruleid:secure-set-cookie
    r.set_cookie("cookie2", "cookie_value", httponly=True)
    # ruleid:secure-set-cookie
    r.set_cookie("cookie3", "cookie_value", samesite="Lax")
    # ruleid:secure-set-cookie
    r.set_cookie("cookie4", "cookie_value", secure=True, httponly=True)
    # ruleid:secure-set-cookie
    r.set_cookie("cookie5", "cookie_value", httponly=True, samesite="Lax")

#{/fact}
