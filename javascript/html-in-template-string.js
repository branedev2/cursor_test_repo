// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
// ok: html-in-template-string
const planet = `world`;
const greeting = "hello";
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=0}
// ok: html-in-template-string
let a = `hello ${planet}`;
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
// ruleid: html-in-template-string
let b = `<h1>hello ${planet}</h1>`;
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
// ruleid: html-in-template-string
let start = `<h1>hello ${planet}`;
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
// ruleid: html-in-template-string
let end = `${planet}</h1><b>foo</b>`;
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
// ruleid: html-in-template-string
let two = `<h1>${greeting} beautiful ${planet}</h1>`;
// {/fact}

// {fact rule=cwe-no-maifest-id@v1.0 defects=1}
function createHtml() {
    // from issue #1385
    // ruleid: html-in-template-string
    return `<div style=${style.color}>${content}</div>`
}
// {/fact}
