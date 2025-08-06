# {fact rule=code-quality-performance@v1.0 defects=1}
def get_all_users():
    users = []
    for i in range(1, 1001):
        user = database.find_user_by_id(i)
        users.append(user)
    return users
# {/fact}