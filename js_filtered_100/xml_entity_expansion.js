// There was no import for 'node-expat' module in this Semgrep cases.
// Semgrep doesn't check if the 'expat' is imported or not before giving related detection.
// GQL not only identifies API as sink but also checks if related module is imported or not.
// So, imported the 'node-expat' module to complete the test case.

// {fact rule=xml-external-entity@v1.0 defects=1}
var expat = require('node-expat')
app.get('/expat', function (req, res) {
    // ruleid:node_entity_expansion
    var parser = new expat.Parser();
    parser.write(req.param("xml"));
})
// {/fact}
