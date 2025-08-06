 def bad_deserialization
# {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
   data = request.env[:name]
   # ruleid: bad-deserialization-env
   obj = Marshal.load(data)
# {/fact}

   o = Klass.new(request.env[:name])
# {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
   data = CSV.dump(o)
   # ruleid: bad-deserialization-env
   obj = CSV.load(data)
# {/fact}

   o = Klass.new("hello\n")
# {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
   data = request.env[:name]
   # ruleid: bad-deserialization-env
   obj = Oj.object_load(data)
# {/fact}
# {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=1}
   # ruleid: bad-deserialization-env
   obj = Oj.load(data)
# {/fact}
 # {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=0}
   # ok: bad-deserialization-env
   obj = Oj.load(data,options=some_safe_options)
# {/fact}
 end

 def ok_deserialization
    o = Klass.new("hello\n")
# {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=0}
    data = CSV.dump(o)
    # ok: bad-deserialization-env
    obj = CSV.load(data)
# {/fact}
    
# {fact rule=object-input-stream-insecure-deserialization@v1.0 defects=0}
    data = get_safe_data()
    # ok: bad-deserialization-env
    obj = Marshal.load(data)
# {/fact}
 end
