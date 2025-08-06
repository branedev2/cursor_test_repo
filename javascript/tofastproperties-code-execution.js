import * as Promise from "bluebird";

// {fact rule=code-injection@v1.0 defects=1}
function bad1(input) {
// ruleid: tofastproperties-code-execution
  util.toFastProperties(input);
}
// {/fact}

// {fact rule=code-injection@v1.0 defects=0}
function ok1() {
// ok: tofastproperties-code-execution
  util.toFastProperties("smth hardcoded");
}
// {/fact}
