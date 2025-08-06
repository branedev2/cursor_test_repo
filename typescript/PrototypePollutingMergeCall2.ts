const lodash = require('lodash')
//{fact rule=mass-assignment@v1.0 defects=1}

app.get('/news', (req, res) => {
  let config = lodash.merge({}, {
    prefs: req.query.prefs
  });
})

//{/fact}
