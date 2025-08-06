// {fact rule=performance@v1.0 defects=1}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class DataFilter18 {
    private Database database = new Database();
    
    public List<String> filterData(List<String> data, String criteria) {
        List<String> filtered = new ArrayList<>();
        for (String item : data) {
            if (item.toLowerCase().contains(criteria.toLowerCase())) {
                filtered.add(item);
            }
        }
        return filtered;
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}