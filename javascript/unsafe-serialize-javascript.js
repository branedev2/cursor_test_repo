var serialize = require('serialize-javascript');

// {fact rule=unsafe_serialize_javascript_js_rule@v1.0 defects=1}
function test(userInput) {
    // ruleid: unsafe-serialize-javascript
    const result = serialize({foo: userInput}, {unsafe: true, space: 2})
    return result
}
// {/fact}

// {fact rule=unsafe_serialize_javascript_js_rule@v1.0 defects=1}
function test2() {
    // ruleid: unsafe-serialize-javascript
    const result = serialize({foo: '<img src=x />'}, {unsafe: true, space: 2})
    return result
}
// {/fact}

// {fact rule=unsafe_serialize_javascript_js_rule@v1.0 defects=0}
function testOk() {
    // ok: unsafe-serialize-javascript
    const result = serialize({foo: '<img src=x />'}, {space: 2})
    return result
}
// {/fact}

// {fact rule=unsafe_serialize_javascript_js_rule@v1.0 defects=0}
function testOk2() {
    // ok: unsafe-serialize-javascript
    const result = escape(serialize({foo: '<img src=x />'}, {space: 2}))
    return result
}
// {/fact}

// {fact rule=unsafe_serialize_javascript_js_rule@v1.0 defects=0}
function testOk3() {
    // ok: unsafe-serialize-javascript
    const result = encodeURI(escape(serialize({foo: '<img src=x />'}, {space: 2})))
    return result
}
// {/fact}