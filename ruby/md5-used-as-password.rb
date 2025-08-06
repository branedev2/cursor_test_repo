require 'digest'

#### True Positives ####
# {fact rule=cryptographic-key-generator@v1.0 defects=1}
def ex1 (user, pwtext)
    # ruleid: md5-used-as-password
    user.set_password Digest::MD5.hexdigest pwtext
end
# {/fact}

# {fact rule=cryptographic-key-generator@v1.0 defects=1}
def ex2 (user, pwtext)
    md5 = Digest::MD5.new
    md5.update pwtext
    md5 << salt(pwtext)
    dig = md5.hexdigest
    # ruleid: md5-used-as-password
    user.set_password dig
end
# {/fact}

#### True Negatives ####
# {fact rule=cryptographic-key-generator@v1.0 defects=0}
def ok1 (user, pwtext)
    # ok: md5-used-as-password
    user.set_password Digest::SHA256.hexdigest pwtext
# {/fact}
end

def ok2 (user, pwtext)
    sha = Digest::SHA256.new
    sha.update pwtext
    sha << salt(pwtext)
# {fact rule=cryptographic-key-generator@v1.0 defects=0}
    dig = sha.hexdigest
    # ok: md5-used-as-password
    user.set_password dig
# {/fact}
end
