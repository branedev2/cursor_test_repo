// {fact rule=performance@v1.0 defects=0}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class CollectionProcessor31 {
    private Database database = new Database();
    
    public void processItems(Collection<String> items) {
        for (String item : items) {
            System.out.println(item);
        }
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}