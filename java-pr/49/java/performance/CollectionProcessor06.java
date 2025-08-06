// {fact rule=performance@v1.0 defects=1}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class CollectionProcessor06 {
    private Database database = new Database();
    
    public void processItems(Collection<String> items) {
        String[] array = items.toArray(new String[0]);
        for (int i = 0; i < array.length; i++) {
            System.out.println(array[i]);
        }
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}