// {fact rule=performance@v1.0 defects=1}
import java.util.*;
import java.util.stream.Collectors;
import java.io.*;

public class NumberProcessor16 {
    private Database database = new Database();
    
    public List<Integer> processNumbers(List<Integer> numbers) {
        List<Integer> result = new ArrayList<>();
        for (Integer num : numbers) {
            if (num % 2 == 0) {
                result.add(num * 2);
            }
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