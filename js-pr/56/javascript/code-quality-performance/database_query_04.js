// {fact rule=code-quality-performance@v1.0 defects=1}
function getAllUsers() {
    let users = [];
    for (let i = 1; i <= 1000; i++) {
        let user = database.findUserById(i);
        users.push(user);
    }
    return users;
}
// {/fact}