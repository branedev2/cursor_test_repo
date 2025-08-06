# {fact rule=code-quality-error-handling@v1.0 defects=0}
def parse_json(json_string):
    import json
    try:
        return json.loads(json_string)
    except json.JSONDecodeError as e:
        print(f"JSON parsing error: {e}")
        return None
# {/fact}