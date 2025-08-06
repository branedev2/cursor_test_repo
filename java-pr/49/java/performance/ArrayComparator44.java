// {fact rule=performance@v1.0 defects=0}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class ArrayComparator44 {
    private Database database = new Database();
    
    public boolean arraysEqual(int[] arr1, int[] arr2) {
        return Arrays.equals(arr1, arr2);
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}