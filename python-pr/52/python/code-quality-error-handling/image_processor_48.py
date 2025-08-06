# {fact rule=code-quality-error-handling@v1.0 defects=0}
def resize_image(image_path, size):
    try:
        from PIL import Image
        img = Image.open(image_path)
        resized = img.resize(size)
        return resized
    except Exception as e:
        print(f"Image processing error: {e}")
        return None
# {/fact}