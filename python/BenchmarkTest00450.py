#{fact rule=autoescape-disabled@v1.0 defects=1}

# cf. https://github.com/PyCQA/bandit/blob/02bad2e42311f420aef52dcd9806d66516ef594d/examples/jinja2_templating.py

import jinja2
from jinja2 import Environment, select_autoescape
templateLoader = jinja2.FileSystemLoader( searchpath="/" )
something = ''


def fake_func():
    return 'foobar'


# ruleid:autoescape-disabled
Environment(loader=templateLoader, autoescape=fake_func())

#{/fact}
