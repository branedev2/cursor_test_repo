// {fact rule=performance@v1.0 defects=0}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class ArrayProcessor28 {
    private Database database = new Database();
    
    public void processArray(int[] array) {
        for (int i = 0; i < array.length; i++) {
            for (int j = i + 1; j < array.length; j++) {
                System.out.println(array[i] + array[j]);
            }
        }
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}