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

public class FileCopier49 {
    private static final Logger logger = LoggerFactory.getLogger(FileCopier49.class);
    private Connection connection;
    
    public boolean duplicateFile(String source, String dest) {
        try {
            Files.copy(Paths.get(source), Paths.get(dest));
            return true;
        } catch (IOException e) {
            logger.error("File duplication failed: " + source + " -> " + dest, e);
            return false;
        }
    }
}
// {/fact}