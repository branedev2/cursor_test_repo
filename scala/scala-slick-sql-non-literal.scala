package slick.security

import slick.jdbc.H2Profile.api._

class FooBar_1 {
  def something(name: String) = {
    val db = Database.forConfig("h2mem1")
    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: scala-slick-sql-non-literal
    val action = sql"select ID, NAME, AGE from #$name".as[(Int,String,Int)]
    db.run(action)
    // {/fact}

    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: scala-slick-sql-non-literal
    val action2 = sql"select ID, NAME, AGE from $name".as[(Int,String,Int)]
    db.run(action2)
    // {/fact}
  }
}