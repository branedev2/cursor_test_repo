require 'net/ftp'

def foo

# {fact rule=path-traversal@v1.0 defects=1}
  host = params[:host]
  # ruleid: avoid-tainted-ftp-call
  ftp = Net::FTP.new(host)
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp = Net::FTP.open(params[:host])
# {/fact}

# {fact rule=path-traversal@v1.0 defects=1}
  ftp = Net::FTP.new()
  # ruleid: avoid-tainted-ftp-call
  ftp.connect(params[:host])
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp.get("/tmp/#{params[:file]}")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp.getbinaryfile("/tmp/#{params[:file]}")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp.gettextfile("/tmp/#{params[:file]}")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp.put("/tmp/#{params[:file]}")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp.putbinaryfile("/tmp/#{params[:file]}")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp.puttextfile("/tmp/#{params[:file]}")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp.delete("/tmp/#{params[:file]}")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp.storlines(params[:cmd], "/tmp/log")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp.storbinary(params[:cmd], "/tmp/log")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp.sendcmd(params[:cmd])
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp.retrlines(params[:cmd])
# {/fact}
# {fact rule=path-traversal@v1.0 defects=1}

  # ruleid: avoid-tainted-ftp-call
  ftp.retrbinary(params[:cmd], 1024)
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp = Net::FTP.new("example.com")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp = Net::FTP.open("example.com")
# {/fact}

# {fact rule=path-traversal@v1.0 defects=0}
  ftp = Net::FTP.new()
  # ok: avoid-tainted-ftp-call
  ftp.connect("example.com")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp.get("/tmp/file")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp.getbinaryfile("/tmp/file")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp.gettextfile("/tmp/file")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp.put("/tmp/file")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp.putbinaryfile("/tmp/file")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp.puttextfile("/tmp/file")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp.delete("/tmp/file")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp.storlines("ls -al", "/tmp/log")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp.storbinary("ls -al", "/tmp/log")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp.sendcmd("ls -al")
# {/fact}
# {fact rule=path-traversal@v1.0 defects=0}

  # ok: avoid-tainted-ftp-call
  ftp.retrlines("ls -al")
# {/fact}

end
