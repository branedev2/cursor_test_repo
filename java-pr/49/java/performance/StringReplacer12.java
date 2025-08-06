// {fact rule=performance@v1.0 defects=1}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class StringReplacer12 {
    private Database database = new Database();
    
    public String replaceAll(String text, String oldChar, String newChar) {
        String result = text;
        while (result.contains(oldChar)) {
            result = result.replace(oldChar, newChar);
        }
        return result;
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}