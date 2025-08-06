// {fact rule=performance@v1.0 defects=0}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class CollectionMerger39 {
    private Database database = new Database();
    
    public List<String> mergeLists(List<String> list1, List<String> list2) {
        List<String> result = new ArrayList<>(list1);
        result.addAll(list2);
        return result;
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}