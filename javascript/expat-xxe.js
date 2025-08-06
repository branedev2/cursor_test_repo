// {fact rule=xml-external-entity@v1.0 defects=1}
function test1(input) {
    // ruleid: expat-xxe
    var expat = require('node-expat')
    var parser = new expat.Parser('UTF-8')
    parser.parse(input)
}
// {/fact}

// {fact rule=xml-external-entity@v1.0 defects=1}
function test2(input) {
    // ruleid: expat-xxe
    const {Parser} = require('node-expat')
    const parser = new Parser('UTF-8')
    parser.write(input)
}
// {/fact}

// {fact rule=xml-external-entity@v1.0 defects=0}
function okTest3() {
    // ok: expat-xxe
    var expat = require('node-expat')
    var parser = new expat.Parser('UTF-8')
    parser.parse("safe input")
}
// {/fact}

// {fact rule=xml-external-entity@v1.0 defects=0}
function okTest4() {
    // ok: expat-xxe
    const {Parser} = require('node-expat')
    const parser = new Parser('UTF-8')
    const x = "safe input"
    parser.write(x)
}
// {/fact}

// {fact rule=xml-external-entity@v1.0 defects=0}
function okTest5(input) {
    // ok: expat-xxe
    const {Parser} = require('some-other-module')
    const parser = new Parser('UTF-8')
    parser.write(input)
}
// {/fact}