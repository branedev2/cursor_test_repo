// {fact rule=performance@v1.0 defects=1}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class ListSearcher02 {
    private Database database = new Database();
    
    public boolean findElement(List<String> list, String target) {
        for (String item : list) {
            if (item.equals(target)) {
                return true;
            }
        }
        return false;
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}