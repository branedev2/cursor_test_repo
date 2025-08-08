// License: LGPL-3.0 License (c) find-sec-bugs
// source: https://github.com/find-sec-bugs/find-sec-bugs/blob/master/findsecbugs-samples-java/src/test/java/testcode/script/ScriptEngineSample.java
// hash: a7694d0
package script

import javax.script.ScriptEngineManager
import javax.script.ScriptException
import javax.script.ScriptEngine

object ScriptInjection {

  // {fact rule=cross-site-scripting@v1.0 defects=1}
  @throws[ScriptException]
  def scripting(userInput: String): Unit = {
    val scriptEngineManager = new ScriptEngineManager
    val scriptEngine: javax.script.ScriptEngine = scriptEngineManager.getEngineByExtension("js")
    // ruleid: scala_script_rule-ScriptInjection
    val result = scriptEngine.eval("test=1;" + userInput)
  }
  // {/fact}
  
  

  //The potential injection will require manual review of the code flow but some false positive can be avoid.
  // {fact rule=cross-site-scripting@v1.0 defects=0}
  @throws[ScriptException]
  def scriptingSafe(): Unit = {
    val scriptEngineManager = new ScriptEngineManager
    val scriptEngine: javax.script.ScriptEngine = scriptEngineManager.getEngineByExtension("js")
    val code: String = "var test=3;test=test*2;"
    val result = scriptEngine.eval(code)
  }

  // {/fact}
}
