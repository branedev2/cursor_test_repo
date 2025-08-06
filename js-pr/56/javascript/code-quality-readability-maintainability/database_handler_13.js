// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
function handleDbOperation(operation, table, data = null, condition = null) {
    if (operation === 'select') {
        return condition ? `SELECT * FROM ${table} WHERE ${condition}` : `SELECT * FROM ${table}`;
    } else if (operation === 'insert') {
        if (data) {
            let columns = Object.keys(data).join(', ');
            let values = Object.values(data).map(v => `'${v}'`).join(', ');
            return `INSERT INTO ${table} (${columns}) VALUES (${values})`;
        }
    } else if (operation === 'update') {
        if (data && condition) {
            let setClause = Object.entries(data).map(([k, v]) => `${k}='${v}'`).join(', ');
            return `UPDATE ${table} SET ${setClause} WHERE ${condition}`;
        }
    } else if (operation === 'delete') {
        return condition ? `DELETE FROM ${table} WHERE ${condition}` : null;
    }
    return null;
}
// {/fact}