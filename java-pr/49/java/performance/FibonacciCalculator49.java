// {fact rule=performance@v1.0 defects=0}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class FibonacciCalculator49 {
    private Database database = new Database();
    
    private Map<Integer, Integer> fibCache = new HashMap<>();
    
    public int fibonacci(int n) {
        if (n <= 1) return n;
        if (fibCache.containsKey(n)) return fibCache.get(n);
        
        int result = fibonacci(n - 1) + fibonacci(n - 2);
        fibCache.put(n, result);
        return result;
    }
    
    private static class Database {
        public User findUserById(int id) { return new User(); }
        public List<User> findAllUsers() { return new ArrayList<>(); }
    }
    
    private static class User {}
}
// {/fact}