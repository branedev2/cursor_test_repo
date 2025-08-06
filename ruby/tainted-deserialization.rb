def handler(event:, context:)
	foobar = event['smth']
# {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}

    # ruleid: tainted-deserialization
    obj1 = Marshal.load(foobar)
# {/fact}

# {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
    data = event['body']['object']
    # ruleid: tainted-deserialization
    obj2 = YAML.load(data)
# {/fact}
# {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}

    # ruleid: tainted-deserialization
    obj3 = CSV.load("o:" + event['data'])
# {/fact}
end

def ok_handler(event:, context:)
# {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=0}

    # ok: tainted-deserialization
    obj1 = Marshal.load(Marshal.dump(Foobar.new))
# {/fact}

# {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=0}
    data = "hardcoded_value"
    # ok: tainted-deserialization
    obj2 = YAML.load(data)
# {/fact}
# {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=0}

    # ok: tainted-deserialization
    obj3 = CSV.load(get_safe_data())
# {/fact}
end
