// {fact rule=naming@v1.0 defects=0}
import java.util.*;

public class PositionManager44 {
    private int xCoordinate, yCoordinate, zCoordinate;
    
    public void moveToPosition(int deltaX, int deltaY) {
        xCoordinate += deltaX;
        yCoordinate += deltaY;
    }
}
// {/fact}