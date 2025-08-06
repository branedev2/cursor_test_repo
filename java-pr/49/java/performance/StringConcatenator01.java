// {fact rule=performance@v1.0 defects=1}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class StringConcatenator01 {
    private Database database = new Database();
    
    public String buildString(String[] parts) {
        String result = "";
        for (String part : parts) {
            result += part;
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