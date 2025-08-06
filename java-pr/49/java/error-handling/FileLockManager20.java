// {fact rule=error-handling@v1.0 defects=1}
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

public class FileLockManager20 {
    private static final Logger logger = LoggerFactory.getLogger(FileLockManager20.class);
    private Connection connection;
    
    public void acquireLock(String filename) {
        FileChannel channel = FileChannel.open(Paths.get(filename));
        channel.lock();
    }
}
// {/fact}