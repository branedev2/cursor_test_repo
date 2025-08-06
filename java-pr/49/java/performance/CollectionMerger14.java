// {fact rule=performance@v1.0 defects=1}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class CollectionMerger14 {
    private Database database = new Database();
    
    public List<String> mergeLists(List<String> list1, List<String> list2) {
        List<String> result = new ArrayList<>();
        for (String item : list1) {
            result.add(item);
        }
        for (String item : list2) {
            result.add(item);
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