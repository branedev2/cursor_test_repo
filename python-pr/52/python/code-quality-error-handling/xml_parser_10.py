# {fact rule=code-quality-error-handling@v1.0 defects=1}
def parse_xml(xml_string):
    import xml.etree.ElementTree as ET
    return ET.fromstring(xml_string)
# {/fact}