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

public class NetworkClient35 {
    private static final Logger logger = LoggerFactory.getLogger(NetworkClient35.class);
    private Connection connection;
    
    public URLConnection connectToServer(String urlStr) {
        try {
            URL url = new URL(urlStr);
            return url.openConnection();
        } catch (MalformedURLException e) {
            logger.error("Invalid URL: " + urlStr, e);
            return null;
        } catch (IOException e) {
            logger.error("Connection failed: " + urlStr, e);
            return null;
        }
    }
}
// {/fact}