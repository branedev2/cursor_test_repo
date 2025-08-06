// {fact rule=performance@v1.0 defects=1}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class MapProcessor10 {
    private Database database = new Database();
    
    public void processMap(Map<String, String> map) {
        for (String key : map.keySet()) {
            String value = map.get(key);
            System.out.println(key + ": " + value);
        }
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}