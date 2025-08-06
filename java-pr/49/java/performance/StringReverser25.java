// {fact rule=performance@v1.0 defects=1}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class StringReverser25 {
    private Database database = new Database();
    
    public String reverseString(String str) {
        String reversed = "";
        for (int i = str.length() - 1; i >= 0; i--) {
            reversed += str.charAt(i);
        }
        return reversed;
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}