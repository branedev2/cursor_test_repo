//{fact rule=xml-external-entity@v1.0 defects=1}

const app = require("express")(),
  libxml = require("libxmljs");

app.post("upload", (req: { body: any; }, res: any) => {
  let xmlSrc = req.body,
    doc = libxml.parseXml(xmlSrc, { noent: true });
});


//{/fact}
