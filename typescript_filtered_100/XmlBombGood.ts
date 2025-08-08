//{fact rule=xml-external-entity@1.0 defects=0}

const app = require("express")(),
  sax = require("sax");

app.post("upload", (req: { body: any; }, res: any) => {
  let xmlSrc = req.body,
    parser = sax.parser(true);
  parser.onopentag = handleStart;
  parser.ontext = handleText;
  parser.write(xmlSrc);
});


//{/fact}