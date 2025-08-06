// {fact rule=performance@v1.0 defects=0}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class TextAnalyzer42 {
    private Database database = new Database();
    
    public int countWords(String text) {
        return text.trim().isEmpty() ? 0 : text.trim().split("\\s+").length;
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}