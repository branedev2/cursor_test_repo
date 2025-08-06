// {fact rule=performance@v1.0 defects=1}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class FileReader05 {
    private Database database = new Database();
    
    public String readFile(String filename) {
        String content = "";
        try (BufferedReader reader = new BufferedReader(new FileReader(filename))) {
            String line;
            while ((line = reader.readLine()) != null) {
                content += line + "\n";
            }
        } catch (IOException e) {
            e.printStackTrace();
        }
        return content;
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}