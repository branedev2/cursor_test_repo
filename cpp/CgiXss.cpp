#include <iostream>

char* do_search(char* query) {
  // Some logic
}

char* escape_html(char* query) {
  // Some logic
}

void bad_server() {
  char* query = getenv("QUERY_STRING");
  puts("<p>Query results for ");
  // BAD: Printing out an HTTP parameter with no escaping
  // {fact rule=do-not-disable-html-autoescape@v1.0 defects=1}
  puts(query);
  puts("\n<p>\n");
  puts(do_search(query));
  // {/fact}
}

void good_server() {
  char* query = getenv("QUERY_STRING");
  puts("<p>Query results for ");
  // GOOD: Escape HTML characters before adding to a page
  // {fact rule=do-not-disable-html-autoescape@v1.0 defects=0}
  char* query_escaped = escape_html(query);
  puts(query_escaped);
  free(query_escaped);

  puts("\n<p>\n");
  puts(do_search(query));
  // {/fact}
}
