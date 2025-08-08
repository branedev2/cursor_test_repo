//{fact rule=autoescape-disabled@v1.0 defects=1}

function filterScript(html: string) {
    var scriptRegex = /<script\b[^>]*>([\s\S]*?)<\/script>/gi;
    var match;
    while ((match = scriptRegex.exec(html)) !== null) {
        html = html.replace(match[0], match[1]);
    }
    return html;
}


//{/fact}