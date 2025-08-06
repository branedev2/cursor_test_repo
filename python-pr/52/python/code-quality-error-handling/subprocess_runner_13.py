# {fact rule=code-quality-error-handling@v1.0 defects=1}
def run_command(command):
    import subprocess
    return subprocess.run(command, shell=True)
# {/fact}