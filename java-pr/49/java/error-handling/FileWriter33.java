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

public class FileWriter33 {
    private static final Logger logger = LoggerFactory.getLogger(FileWriter33.class);
    private Connection connection;
    
    public boolean saveContent(String filename, String content) {
        try (FileWriter writer = new FileWriter(filename)) {
            writer.write(content);
            return true;
        } catch (IOException e) {
            logger.error("Content saving failed: " + filename, e);
            return false;
        }
    }
}
// {/fact}