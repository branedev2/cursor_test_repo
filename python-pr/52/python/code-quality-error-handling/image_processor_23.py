# {fact rule=code-quality-error-handling@v1.0 defects=1}
def resize_image(image_path, size):
    from PIL import Image
    img = Image.open(image_path)
    resized = img.resize(size)
    return resized
# {/fact}