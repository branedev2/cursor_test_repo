from flask import request, app, send_file, safe_join
import os

# Flask
#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_1():
    from flask import request
    file_path = request.args["file"]
    # Noncompliant: user input file path is not sanitized.
    file = open(file_path)
    file.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_2():
    f = open(request.args["file"])
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_3():
    file_name = request.args["file"]
    file_path = "./" + file_name
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_4():
    file_name = request.args["file"]
    f = open("./" + file_name)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_5():
    f = open("./" + request.args["file"])
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_6():
    file_name = request.args["file"]
    f = open(f"./{file_name}")
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_7():
    file_name = request.args["file"]
    f = open("./{}".format(file_name))
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_8():
    f = open("./{}".format(request.args["file"]))
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_9():
    file_path = request.args["file"]
    os.remove(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_10():
    file_path = request.args["file"]
    os.rmdir(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_11():
    file_path = request.args["file"]
    with open(file_path) as f:
        print("something")
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_12():
    file_path = request.form["file"]
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_13():
    file_path = request.args.get("file")
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_14():
    file_path = request.form.get("file")
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_15():
    file_path = request.values["file"]
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def negative_16():
    file_path = request.values.get("file")
    f = open(file_path)
    f.close()
#{/fact}

#Django
#{fact rule=path-traversal@v1.0 defects=1}
def negative_17(request):
    file_path = request.GET["file"]
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
def negative_18(request):
    file_path = request.GET.get("file")
    f = open(file_path)
    f.close()
#{/fact}

def bad_sanitizer(data):
    return data.replace(" ", ",")

def good_sanitizer(data):
    return data.replace("..", "")

#send_file_non_compliant
# Flask
def safe_path(filepath):
    basedir = os.getcwd()
    file_path = os.path.abspath(os.path.realpath(filepath))
    return safe_join(basedir, file_path)

#send_file_non_compliant
#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_1():
    file_path = request.args["file"]
    return send_file(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_2():
    return send_file(request.args["file"])
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_3():
    file_path = request.args.get("file")
    return send_file(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_4():
    file_path = request.form["file"]
    return send_file(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_5():
    file_path = request.form.get("file")
    return send_file(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_6():
    file_path = request.values["file"]
    return send_file(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_7():
    file_path = request.values.get("file")
    return send_file(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_8():
    return send_file(request.args.get("file"))
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_9():
    return send_file(request.form["file"])
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_10():
    return send_file(request.form.get("file"))
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_11():
    return send_file(request.values["file"])
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_12():
    return send_file(request.values.get("file"))
#{/fact}

# Flask
#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def positive_1():
    from flask import request
    file_path = request.args["file"]
    # Compliant: user input file path is sanitized.
    file_path = file_path.replace("../", "")
    file = open(file_path)
    file.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def positive_2():
    f = open(good_sanitizer(request.args["file"]))
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def positive_3():
    file_name = good_sanitizer(request.args["file"])
    file_path = "./" + file_name
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def positive_4():
    file_path = good_sanitizer(request.args["file"])
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def positive_5():
    file_name = request.args["file"]
    f = open("./" + good_sanitizer(file_name))
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def positive_6():
    f = open("./" + good_sanitizer(request.args["file"]))
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def positive_7():
    file_name = good_sanitizer(request.args["file"])
    f = open(f"./{file_name}")
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def positive_8():
    file_name = good_sanitizer(request.args["file"])
    f = open("./{}".format(file_name))
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def positive_9():
    f = open("./{}".format(good_sanitizer(request.args["file"])))
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def positive_10():
    file_path = good_sanitizer(request.args["file"])
    os.remove(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def bad_sanitization_negative_11():
    file_path = bad_sanitizer(request.args["file"])
    os.rmdir(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def bad_sanitization_negative_12():
    file_path = bad_sanitizer(request.args["file"])
    with open(file_path) as f:
        print("something")
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def bad_sanitization_negative_13():
    file_path = bad_sanitizer(request.form["file"])
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def bad_sanitization_negative_14():
    file_path = bad_sanitizer(request.args.get("file"))
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def bad_sanitization_negative_15():
    file_path = bad_sanitizer(request.form.get("file"))
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def bad_sanitization_negative_16():
    file_path = bad_sanitizer(request.values["file"])
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def bad_sanitization_negative_17():
    file_path = bad_sanitizer(request.values.get("file"))
    f = open(file_path)
    f.close()
#{/fact}

#Django
#{fact rule=path-traversal@v1.0 defects=0}
def positive_18(request):
    file_path = good_sanitizer(request.GET["file"])
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
def negative_19(request):
    file_path = bad_sanitizer(request.GET.get("file"))
    f = open(file_path)
    f.close()
#{/fact}

# FastAPI
#{fact rule=path-traversal@v1.0 defects=1}
@app.post('/someurl')
def fast_non_conformant_1(file: str):
    file_path = file
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.post('/someurl')
def fast_non_conformant_2(file: str):
    f = open(file)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.post('/someurl')
def fast_non_conformant_3(file_name: str):
    file_path = "./" + file_name
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.post('/someurl')
def fast_conformant_1():
    file_path = request.args["file"]
    file_path = good_sanitizer(file_path)
    f = open(file_path)
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.post('/someurl')
def fast_conformant_2():
    f = open(good_sanitizer(request.args["file"]))
    f.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.post('/someurl')
def fast_non_conformant_4():
    file_name = bad_sanitizer(request.args["file"])
    file_path = "./" + file_name
    f = open(file_path)
    f.close()
#{/fact}

#send_file_compliant
#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_1():
    file_path = request.args["file"] 
    file_path = safe_path(file_path)
    return send_file(file_path)        
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_2():
    return send_file(safe_path(request.args["file"]))
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_3():
    file_path = request.args.get("file")
    file_path = safe_path(file_path)
    return send_file(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_4():
    file_path = request.form["file"]
    file_path = safe_path(file_path)
    return send_file(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_5():
    file_path = request.form.get("file")
    file_path = safe_path(file_path)
    return send_file(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_6():
    file_path = request.values["file"]
    file_path = safe_path(file_path)
    return send_file(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_7():
    file_path = request.values.get("file")
    file_path = safe_path(file_path)
    return send_file(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_8():
    return send_file(safe_path(request.args.get("file")))
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_9():
    file_path = safe_path(request.form["file"])
    return send_file(file_path)
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_10():
    return send_file(safe_path(request.form["file"]))
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_11():
    file_path = request.form.get("file")
    return send_file(safe_path(file_path))
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_12():
    return send_file(safe_path(request.form.get("file")))
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_13():
    file_path = request.vaues["file"]
    return send_file(safe_path(file_path))
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_14():
    return send_file(safe_path(request.values["file"]))
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_15():
    file_path = request.values.get("file")
    return send_file(safe_path(file_path))
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_16():
    return send_file(safe_path(request.values.get("file")))
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def send_file_compliant_17():
    file_path = request.args.get("file")
    return send_file(safe_path(file_path))
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def send_file_non_compliant_100():
    filepath = request.args.get('filepath')
    if not filepath:
        abort(400, "Invalid filepath")
    if not os.path.isfile(filepath):
        if "flasklog" in filepath or "celerylog" in filepath:
            return ''
        else:
            abort(404, "File not found")
    if request.args.get('download'):
        mimetype = 'application/octet-stream'
        attach = True
        cache_timeout = 0
    else:
        last_byte = to_int(request.args.get('last_byte'))
        if last_byte and last_byte == os.path.getsize(filepath):
            return ''
        mimetypes.add_type('text/plain', '.log')
        mimetype, _ = mimetypes.guess_type(filepath)
        attach = False
        cache_timeout = 0
    return send_file(filepath, mimetype=mimetype, as_attachment=attach,
                     cache_timeout=cache_timeout)
#{/fact}

## Additional cases
#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def non_compliant_1():
    file_path = request.form["file"]
    file_path = file_path.replace(" ", ",")
    file = open(file_path)
    file.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=1}
@app.route('/someurl')
def non_compliant_2():
    basePath = "/var/data/images/"
    desiredCategory = request.args.get("category")
    file = open(basePath + desiredCategory)
    file.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def compliant_1():
    file_path = request.form["file"]
    mr = re.match("[a-z]+", file_path)
    if mr:
        file = open(file_path)
        file.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def compliant_2():
    basePath = "/var/data/images/"
    desiredCategory = request.args.get("category")
    if re.match(r"[a-z]+", desiredCategory):
        file = open(basePath + desiredCategory)
        file.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def compliant_3():
    basePath = "/var/data/images/"
    desiredCategory = request.args.get("category")
    allowed_categories = ["cats", "dogs", "birds", "fish"]
    if desiredCategory in allowed_categories:
        file = open(basePath + desiredCategory)
        file.close()
#{/fact}

#{fact rule=path-traversal@v1.0 defects=0}
@app.route('/someurl')
def compliant_4():
    file_path = request.args["file"]
    file_path = file_path.replace("../", "")
    return send_file(file_path)
#{/fact}