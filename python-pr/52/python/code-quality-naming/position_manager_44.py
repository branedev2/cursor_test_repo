# {fact rule=code-quality-naming@v1.0 defects=0}
x_coordinate, y_coordinate, z_coordinate = 0, 0, 0

def move_to_position(delta_x, delta_y):
    global x_coordinate, y_coordinate
    x_coordinate += delta_x
    y_coordinate += delta_y
# {/fact}