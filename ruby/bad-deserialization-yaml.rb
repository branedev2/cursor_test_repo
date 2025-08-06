 def bad_deserialization
   # {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
    o = params["input"]
    data = YAML.dump(o)
    # ruleid: bad-deserialization-yaml
    obj = YAML.load(o)
 end
 # {/fact}
 
 # {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=0}
 def ok_deserialization
    o = Klass.new("hello\n")
    data = YAML.dump(o)
    # ok: bad-deserialization-yaml
    obj = YAML.load(data, safe: true)
    # {/fact}
    # {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=0}

    filename = File.read("test.txt")
    data = YAML.dump(filename)
    # ok: bad-deserialization-yaml
    YAML.load(filename)
    # {/fact}
    # {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=0}

    # ok: bad-deserialization-yaml
    YAML.load(File.read("test.txt"))
 end
 # {/fact}