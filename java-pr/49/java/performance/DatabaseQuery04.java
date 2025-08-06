// {fact rule=performance@v1.0 defects=1}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class DatabaseQuery04 {
    private Database database = new Database();
    
    public List<User> getAllUsers() {
        List<User> users = new ArrayList<>();
        for (int i = 1; i <= 1000; i++) {
            User user = database.findUserById(i);
            users.add(user);
        }
        return users;
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}