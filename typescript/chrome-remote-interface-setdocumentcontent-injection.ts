import CDP from 'chrome-remote-interface';
import express from "express";
const app = express();

function example(userInput: any) {
    CDP(async (client: { close?: any; Page?: any; }) => {
        const {Page} = client;
        try {
            const {frameId} = await Page.navigate({url: 'about:blank'});
            // {fact rule=server-side-request-forgery@v1.0 defects=0}
            const html = '<html>test</html>';
            // ok
            await Page.setDocumentContent({frameId, html});
            // {/fact}

            // {fact rule=server-side-request-forgery@v1.0 defects=1}
            // ruleid:chrome-remote-interface-setdocumentcontent-injection
            await Page.setDocumentContent({frameId, html: userInput});
            // {/fact}
        } catch (err) {
            console.error(err);
            client.close();
        }
    }).on('error', (err: any) => {
        console.error(err);
    });
}

function call() {
    app.get("/add/:userInput", function (req: { params: { userInput: any; }; }, res: any) {
      example(req.params.userInput)
    });
  }

  call()