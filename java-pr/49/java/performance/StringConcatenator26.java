// {fact rule=performance@v1.0 defects=0}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class StringConcatenator26 {
    private Database database = new Database();
    
    public String buildString(String[] parts) {
        StringBuilder result = new StringBuilder();
        for (String part : parts) {
            result.append(part);
        }
        return result.toString();
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}