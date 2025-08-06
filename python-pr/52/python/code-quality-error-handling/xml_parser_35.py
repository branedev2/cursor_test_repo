# {fact rule=code-quality-error-handling@v1.0 defects=0}
def parse_xml(xml_string):
    import xml.etree.ElementTree as ET
    try:
        return ET.fromstring(xml_string)
    except ET.ParseError as e:
        print(f"XML parsing error: {e}")
        return None
# {/fact}