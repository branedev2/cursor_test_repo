# {fact rule=code-quality-error-handling@v1.0 defects=0}
def run_command(command):
    import subprocess
    try:
        return subprocess.run(command, shell=True, check=True)
    except subprocess.CalledProcessError as e:
        print(f"Command error: {e}")
        return None
# {/fact}