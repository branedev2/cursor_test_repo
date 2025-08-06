require 'open3'

def test_params()
# {fact rule=autoescape-disabled@v1.0 defects=1}
  user_input = params['some_key']
# ruleid: dangerous-exec
  exec("ls -lah #{user_input}")
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
# ruleid: dangerous-exec
  Process.spawn([user_input, "smth"])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
# ruleid: dangerous-exec
  output = exec(["sh", "-c", user_input])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
# ruleid: dangerous-exec
  pid = spawn(["bash", user_input])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
  commands = "ls -lah /raz/dva"
# ok: dangerous-exec
  system(commands)
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
  cmd_name = "sh"
# ok: dangerous-exec
  Process.exec([cmd_name, "ls", "-la"])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
# ok: dangerous-exec
  Open3.capture2({"FOO" => "BAR"}, [cmd_name, "smth"])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
# ok: dangerous-exec
  system("ls -lah /tmp")
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
# ok: dangerous-exec
  exec(["ls", "-lah", "/tmp"])
end
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
def test_calls(user_input)
  # ruleid: dangerous-exec
    exec("ls -lah #{user_input}")
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
  # ruleid: dangerous-exec
    Process.spawn([user_input, "smth"])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
  # ruleid: dangerous-exec
    output = exec(["sh", "-c", user_input])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
  # ruleid: dangerous-exec
    pid = spawn(["bash", user_input])
# {/fact}
  
# {fact rule=autoescape-disabled@v1.0 defects=0}
    commands = "ls -lah /raz/dva"
  # ok: dangerous-exec
    system(commands)
# {/fact}
  
# {fact rule=autoescape-disabled@v1.0 defects=0}
    cmd_name = "sh"
  # ok: dangerous-exec
    Process.exec([cmd_name, "ls", "-la"])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
  # ok: dangerous-exec
    Open3.capture2({"FOO" => "BAR"}, [cmd_name, "smth"])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
  # ok: dangerous-exec
    system("ls -lah /tmp")
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
  # ok: dangerous-exec
    exec(["ls", "-lah", "/tmp"])
# {/fact}
  end

  def test_params()
# {fact rule=autoescape-disabled@v1.0 defects=1}
    user_input = params['some_key']
  # ruleid: dangerous-exec
    exec("ls -lah #{user_input}")
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
  # ruleid: dangerous-exec
    Process.spawn([user_input, "smth"])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
  # ruleid: dangerous-exec
    output = exec(["sh", "-c", user_input])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
  # ruleid: dangerous-exec
    pid = spawn(["bash", user_input])
# {/fact}
  
# {fact rule=autoescape-disabled@v1.0 defects=0}
    commands = "ls -lah /raz/dva"
  # ok: dangerous-exec
    system(commands)
# {/fact}
  
# {fact rule=autoescape-disabled@v1.0 defects=0}
    cmd_name = "sh"
  # ok: dangerous-exec
    Process.exec([cmd_name, "ls", "-la"])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
  # ok: dangerous-exec
    Open3.capture2({"FOO" => "BAR"}, [cmd_name, "smth"])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
  # ok: dangerous-exec
    system("ls -lah /tmp")
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
  # ok: dangerous-exec
    exec(["ls", "-lah", "/tmp"])
# {/fact}
  end
  
  def test_cookies()
# {fact rule=autoescape-disabled@v1.0 defects=1}
    user_input = cookies['some_cookie']
    # ruleid: dangerous-exec
      exec("ls -lah #{user_input}")
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
    # ruleid: dangerous-exec
      Process.spawn([user_input, "smth"])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
    # ruleid: dangerous-exec
      output = exec(["sh", "-c", user_input])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=1}
    # ruleid: dangerous-exec
      pid = spawn(["bash", user_input])
# {/fact}
    
# {fact rule=autoescape-disabled@v1.0 defects=0}
      commands = "ls -lah /raz/dva"
    # ok: dangerous-exec
      system(commands)
# {/fact}
    
# {fact rule=autoescape-disabled@v1.0 defects=0}
      cmd_name = "sh"
    # ok: dangerous-exec
      Process.exec([cmd_name, "ls", "-la"])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
    # ok: dangerous-exec
      Open3.capture2({"FOO" => "BAR"}, [cmd_name, "smth"])
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
    # ok: dangerous-exec
      system("ls -lah /tmp")
# {/fact}

# {fact rule=autoescape-disabled@v1.0 defects=0}
    # ok: dangerous-exec
      exec(["ls", "-lah", "/tmp"])
# {/fact}
    end