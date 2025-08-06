app.get('/', function (req: any, res: { statusCode: number; setHeader: (arg0: string, arg1: string) => void; end: (arg0: any) => void; }) {
    try {
        foo;
    }
        // {fact rule=stack-trace-exposure@v1.0 defects=1}

    catch (err) {
        res.statusCode = 500;
        res.setHeader("Content-Type", "text/plain");
        // ruleid:node_error_disclosure
        res.end(err.stack);
        return;
    }
});
// {/fact}

// {fact rule=stack-trace-exposure@v1.0 defects=1}

// ruleid:generic_error_disclosure
try {
    throw new Error("Something unexpected has occurred.");
} catch (e) {
    console.error(e);
}
// {/fact}

// {fact rule=stack-trace-exposure@v1.0 defects=1}

// ruleid:generic_error_disclosure
console.trace("baad")
// {/fact}