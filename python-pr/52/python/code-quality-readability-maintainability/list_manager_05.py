# {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
def manage_list(lst):
    new_lst = []
    for item in lst:
        if item:
            if isinstance(item, str):
                new_lst.append(item.upper())
            elif isinstance(item, int):
                new_lst.append(item * 2)
            elif isinstance(item, float):
                new_lst.append(round(item, 2))
            else:
                new_lst.append(str(item))
    return new_lst
# {/fact}