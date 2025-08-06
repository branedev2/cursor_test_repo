from django.template import Library
from django.utils.html import conditional_escape
from django.utils.safestring import mark_safe, mark_for_escaping

register = Library()

# Non Conformant
# {fact rule=cross-site-scripting@v1.0 defects=1}
@register.filter(is_safe=True)      #sensitive 
def non_conformant_1(value):
    result = '<strong>' + value + '</strong>'
    return result
# {/fact}

# {fact rule=cross-site-scripting@v1.0 defects=1}
@register.filter(is_safe=True)      #sensitive    
def non_conformant_2(value, arg):
    result = value.replace(arg, '')
    return result
# {/fact}

# {fact rule=cross-site-scripting@v1.0 defects=1}
@register.filter(is_safe=True, needs_autoescape=False)      #sensitive 
def non_conformant_3(value):
    result = '<strong>' + value + '</strong>'
    return result

# {fact rule=cross-site-scripting@v1.0 defects=1}
@register.filter(is_safe=True, needs_autoescape=False)      #sensitive 
def non_conformant_4(value, arg):
    result = value.replace(arg, '')
    return result
# {/fact}

# Conformant
# {fact rule=cross-site-scripting@v1.0 defects=0}
@register.filter
def conformant_1(value):
    result = '<strong>' + value + '</strong>'
    return result
# {/fact}

# {fact rule=cross-site-scripting@v1.0 defects=0}
@register.filter
def conformant_2(value, arg):
    result = value.replace(arg, '')
    return result
# {/fact}

# {fact rule=cross-site-scripting@v1.0 defects=0}
@register.filter(is_safe=False)
def conformant_3(value):
    result = '<strong>' + value + '</strong>'
    return result
# {/fact}

# {fact rule=cross-site-scripting@v1.0 defects=0}
@register.filter(is_safe=False)
def conformant_4(value, arg):
    result = value.replace(arg, '')
    return result
# {/fact}

# {fact rule=cross-site-scripting@v1.0 defects=0}
@register.filter(needs_autoescape=True)
def conformant_5(value, autoescape=True):
    if autoescape:
        esc = conditional_escape
    else:
        esc = lambda x: x
    result = '<strong>' + esc(value) + '</strong>'
    return mark_safe(result)
# {/fact}

# {fact rule=cross-site-scripting@v1.0 defects=0}
@register.filter(needs_autoescape=True)
def conformant_6(value, arg, autoescape=True):
    if autoescape:
        esc = conditional_escape
    else:
        esc = lambda x: x
    result = esc(value.replace(arg, ''))
    return mark_safe(result)
# {/fact}

# {fact rule=cross-site-scripting@v1.0 defects=0}
@register.filter(is_safe=True, needs_autoescape=True)
def conformant_7(value, autoescape=True):
    if autoescape:
        esc = conditional_escape
    else:
        esc = lambda x: x
    result = '<strong>' + esc(value) + '</strong>'
    return mark_safe(result)
# {/fact}

# {fact rule=cross-site-scripting@v1.0 defects=0}
@register.filter(is_safe=True, needs_autoescape=True)
def conformant_8(value, arg, autoescape=True):
    if autoescape:
        esc = conditional_escape
    else:
        esc = lambda x: x
    result = esc(value.replace(arg, ''))
    return mark_safe(result)
# {/fact}

# {fact rule=cross-site-scripting@v1.0 defects=0}
@register.filter(is_safe=True)
def conformant_9(value):
    result = '<strong>' + value + '</strong>'
    return mark_for_escaping(result)
# {/fact}

# {fact rule=cross-site-scripting@v1.0 defects=0}
@register.filter(is_safe=True)  
def conformant_10(value, arg):
    result = value.replace(arg, '')
    return mark_for_escaping(result)
# {/fact}

# {fact rule=cross-site-scripting@v1.0 defects=0}
@register.filter(is_safe=True)  
def conformant_11(value, arg):
    result = mark_safe(value.replace(arg, ''))
    return result
# {/fact}