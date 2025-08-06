// {fact rule=performance@v1.0 defects=1}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class ListDuplicateRemover21 {
    private Database database = new Database();
    
    public List<String> removeDuplicates(List<String> list) {
        List<String> result = new ArrayList<>();
        for (String item : list) {
            if (!result.contains(item)) {
                result.add(item);
            }
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