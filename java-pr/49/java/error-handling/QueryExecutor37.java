// {fact rule=error-handling@v1.0 defects=0}
import java.io.*;
import java.net.*;
import java.sql.*;
import java.text.*;
import java.util.regex.*;
import java.util.zip.*;
import javax.mail.*;
import javax.xml.parsers.*;
import javax.crypto.*;
import java.nio.file.*;
import java.nio.channels.*;
import java.lang.reflect.*;
import java.util.*;
import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.xml.sax.SAXException;

public class QueryExecutor37 {
    private static final Logger logger = LoggerFactory.getLogger(QueryExecutor37.class);
    private Connection connection;
    
    public ResultSet runQuery(String sql) {
        try {
            Statement stmt = connection.createStatement();
            return stmt.executeQuery(sql);
        } catch (SQLException e) {
            logger.error("Query execution failed: " + sql, e);
            return null;
        }
    }
}
// {/fact}