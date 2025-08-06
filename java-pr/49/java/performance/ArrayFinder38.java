// {fact rule=performance@v1.0 defects=0}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class ArrayFinder38 {
    private Database database = new Database();
    
    public int findMax(int[] array) {
        return Arrays.stream(array).max().orElse(Integer.MIN_VALUE);
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}