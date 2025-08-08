//{fact rule=xml-external-entity@v1.0 defects=1}

const app = require("express")(),
  expat = require("node-expat");

app.post("upload", (req: { body: any; }, res: any) => {
  let xmlSrc = req.body,
    parser = new expat.Parser();
  parser.on("startElement", handleStart);
  parser.on("text", handleText);
  parser.write(xmlSrc);
});


//{/fact}
