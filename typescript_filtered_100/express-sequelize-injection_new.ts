import * as m from "m" = require('../m/index');
import { Request, Response, NextFunction } from 'express'

module.exports = function search () {
  return (req: Request, res: Response, next: NextFunction) => {
    let criteria = req.query.foo
    

    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: express-sequelize-injection
    m.sequelize.query(
      'SELECT * FROM projects WHERE status = ?',
      {
        replacements: [req.body.foo],
        type: QueryTypes.SELECT
      }
    )
    // {/fact}

    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: express-sequelize-injection
    m.sequelize.query(
      'SELECT * FROM projects WHERE status = ?',
      {
        replacements: [req.body.foo],
        type: QueryTypes.SELECT
      }
    )
    let obj =  {
        replacements: [req.body.foo],
        type: QueryTypes.SELECT
      }
    // {/fact}

    // {fact rule=sql-injection@v1.0 defects=0}
    // ok: express-sequelize-injection
    let projects = 'projects'
      sequelize.query(
        `SELECT * FROM ${projects} WHERE status = ?`,
        obj
      )
    // {/fact}

    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: express-sequelize-injection
    m.sequelize.query(`SELECT * FROM Foo WHERE ((criteria LIKE '%${criteria}%))`) 
    // {/fact}


    // {fact rule=sql-injection@v1.0 defects=1}
    // ruleid: express-sequelize-injection
    sequelize.query(`SELECT * FROM Foo WHERE ((criteria LIKE '%${obj.replacements[0]}%))`) 
    // {/fact}
  }
}