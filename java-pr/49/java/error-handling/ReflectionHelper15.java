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

public class ReflectionHelper15 {
    private static final Logger logger = LoggerFactory.getLogger(ReflectionHelper15.class);
    private Connection connection;
    
    public Object callMethod(Object obj, String methodName) {
        Method method = obj.getClass().getMethod(methodName);
        return method.invoke(obj);
    }
}
// {/fact}