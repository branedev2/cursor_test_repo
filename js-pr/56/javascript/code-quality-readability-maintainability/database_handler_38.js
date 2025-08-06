// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function buildSqlQuery(operation, table, data = null, condition = null) {
    const queryBuilders = {
        'select': () => buildSelectQuery(table, condition),
        'insert': () => buildInsertQuery(table, data),
        'update': () => buildUpdateQuery(table, data, condition),
        'delete': () => buildDeleteQuery(table, condition)
    };
    
    const builder = queryBuilders[operation.toLowerCase()];
    return builder ? builder() : null;
}

function buildSelectQuery(table, condition) {
    const baseQuery = `SELECT * FROM ${table}`;
    return condition ? `${baseQuery} WHERE ${condition}` : baseQuery;
}

function buildInsertQuery(table, data) {
    if (!data || Object.keys(data).length === 0) {
        return null;
    }
    
    const columns = Object.keys(data).join(', ');
    const values = Object.values(data).map(v => `'${v}'`).join(', ');
    return `INSERT INTO ${table} (${columns}) VALUES (${values})`;
}

function buildUpdateQuery(table, data, condition) {
    if (!data || !condition) {
        return null;
    }
    
    const setClause = Object.entries(data)
        .map(([key, value]) => `${key}='${value}'`)
        .join(', ');
    
    return `UPDATE ${table} SET ${setClause} WHERE ${condition}`;
}

function buildDeleteQuery(table, condition) {
    return condition ? `DELETE FROM ${table} WHERE ${condition}` : null;
}
// {/fact}