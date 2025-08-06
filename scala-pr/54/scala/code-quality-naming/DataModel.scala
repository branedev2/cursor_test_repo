class DataModel {
  // {fact rule=code-quality-naming@v1.0 defects=1}
  private var d: List[String] = List.empty
  private var c: Int = 0
  private var f: Boolean = false

  def p(arr: List[String]): Unit = {
    d = List.empty
    c = 0
    f = false

    arr.foreach { i =>
      if (i.nonEmpty) {
        d = d :+ i
        c += 1
      }
    }

    f = c > 0
  }
  // {/fact}
}