# {fact rule=code-quality-naming@v1.0 defects=1}
x, y, z = 0, 0, 0

def move(dx, dy):
    global x, y
    x += dx
    y += dy
# {/fact}