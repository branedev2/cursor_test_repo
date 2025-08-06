package lang.security.audit.sqli;

import org.springframework.web.bind.annotation.RequestParam;

import java.sql.Connection;
import java.sql.ResultSet;
import java.sql.SQLException;
import java.sql.Statement;


class Jdbc {

    Connection con;

    public void query1(@RequestParam("input") String input) throws SQLException {
        Statement stmt = con.createStatement();
        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        ResultSet rs = stmt.executeQuery("select * from Users where name = '"+input+"'");
    }
    // {/fact}

    public void query2(@RequestParam("input") String input) throws SQLException {
        Statement stmt = con.createStatement();
        String sql = "select * from Users where name = '" + input + "'";
        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        ResultSet rs = stmt.executeQuery(sql);
    }
    // {/fact}

    public void query3(@RequestParam("input") String input) throws SQLException {
        Statement stmt = con.createStatement();
        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        ResultSet rs = stmt.executeQuery(String.format("select * from Users where name = '%s'",input));
        // {/fact}
        // {fact rule=sql-injection@v1.0 defects=0}
        // ok: jdbc-sqli
        ResultSet rs2 = stmt.executeQuery("select * from Users where name = '123'");
        // {/fact}
    }

    public void query4(@RequestParam("input") String input) throws SQLException {
        Statement stmt = con.createStatement();
        String sql = "select * from Users where name = '%s'";
        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        ResultSet rs = stmt.executeQuery(String.format(sql,input));
    }
    // {/fact}

    public void executeQuerySamples(@RequestParam("input") String sql) throws SQLException {
        Statement stmt = con.createStatement();
        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.executeQuery(sql);
        // {/fact}

        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.execute(sql);
        // {/fact}

        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.execute(sql, Statement.RETURN_GENERATED_KEYS);
        // {/fact}

        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.execute(sql, new int[]{1, 2, 3});
        // {/fact}

        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.execute(sql, new String[]{"firstname", "middlename", "lastname"});
        // {/fact}

    }

    public void executeUpdateSamples(@RequestParam("input") String sql) throws SQLException {
        Statement stmt = con.createStatement();
        // {fact rule=sql-injection@v1.0 defects=0}
        // ok: jdbc-sqli
        stmt.executeUpdate("select * from Users where name = '123'");
        // {/fact}

        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.executeUpdate(sql);
        // {/fact}

        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.executeUpdate(sql, Statement.RETURN_GENERATED_KEYS);
        // {/fact}

        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.executeUpdate(sql, new int[]{1, 2, 3});
        // {/fact}

        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.executeUpdate(sql, new String[]{"firstname", "middlename", "lastname"});
        // {/fact}

    }


    public void executeExecuteLargeUpdateSamples(@RequestParam("sql") String sql) throws SQLException {
        Statement stmt = con.createStatement();
        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.executeLargeUpdate(sql);
        // {/fact}

        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.executeLargeUpdate(sql, Statement.RETURN_GENERATED_KEYS);
        // {/fact}

        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.executeLargeUpdate(sql, new int[]{1, 2, 3});
        // {/fact}

        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.executeLargeUpdate(sql, new String[]{"firstname", "middlename", "lastname"});
        // {/fact}

    }

    public void otherSamples(@RequestParam("sql") String sql) throws SQLException {
        con.nativeSQL(sql);
        Statement stmt = con.createStatement();
        // {fact rule=sql-injection@v1.0 defects=1}
        // ruleid: jdbc-sqli
        stmt.addBatch(sql);
        // {/fact}
        String sqlString = "select * from Users where name = '123'";
        // {fact rule=sql-injection@v1.0 defects=0}
        // ok: jdbc-sqli
        stmt.addBatch(sqlString);
    }
    // {/fact}

}

