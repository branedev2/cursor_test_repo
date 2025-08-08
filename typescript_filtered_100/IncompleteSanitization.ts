//{fact rule=autoescape-disabled@v1.0 defects=1}

function escapeQuotes(s: string) {
  return s.replace("'", "''");
}

//{/fact}