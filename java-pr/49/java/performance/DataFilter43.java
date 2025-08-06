// {fact rule=performance@v1.0 defects=0}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class DataFilter43 {
    private Database database = new Database();
    
    public List<String> filterData(List<String> data, String criteria) {
        return data.stream()
                .filter(item -> item.toLowerCase().contains(criteria.toLowerCase()))
                .collect(Collectors.toList());
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}