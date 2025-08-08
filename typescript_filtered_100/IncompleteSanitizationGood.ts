//{fact rule=autoescape-disabled@v1.0 defects=0}

function escapeQuotes(s: string) {
  return s.replace(/'/g, "''");
}


//{/fact}