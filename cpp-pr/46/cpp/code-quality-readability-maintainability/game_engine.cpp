#include <iostream>
#include <string>

class GameEngine {
public:
    void updateGame(int playerX, int playerY, int enemyX, int enemyY, int playerHealth, int enemyHealth, bool playerAttacking, bool enemyAttacking) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        if (playerAttacking && abs(playerX - enemyX) < 50 && abs(playerY - enemyY) < 50) {
            enemyHealth -= 10;
            if (enemyHealth <= 0) {
                std::cout << "Enemy defeated!" << std::endl;
                return;
            }
        }
        if (enemyAttacking && abs(playerX - enemyX) < 50 && abs(playerY - enemyY) < 50) {
            playerHealth -= 15;
            if (playerHealth <= 0) {
                std::cout << "Player defeated!" << std::endl;
                return;
            }
        }
        if (playerX < 0) playerX = 0;
        if (playerX > 800) playerX = 800;
        if (playerY < 0) playerY = 0;
        if (playerY > 600) playerY = 600;
        if (enemyX < 0) enemyX = 0;
        if (enemyX > 800) enemyX = 800;
        if (enemyY < 0) enemyY = 0;
        if (enemyY > 600) enemyY = 600;
        // {/fact}
    }
    
    void updateGameReadable(int playerX, int playerY, int enemyX, int enemyY, int playerHealth, int enemyHealth, bool playerAttacking, bool enemyAttacking) {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        handleCombat(playerX, playerY, enemyX, enemyY, playerHealth, enemyHealth, playerAttacking, enemyAttacking);
        constrainPositions(playerX, playerY, enemyX, enemyY);
        // {/fact}
    }
    
private:
    void handleCombat(int playerX, int playerY, int enemyX, int enemyY, int& playerHealth, int& enemyHealth, bool playerAttacking, bool enemyAttacking) {
        bool inRange = isInAttackRange(playerX, playerY, enemyX, enemyY);
        
        if (playerAttacking && inRange) {
            enemyHealth -= 10;
            if (enemyHealth <= 0) {
                std::cout << "Enemy defeated!" << std::endl;
            }
        }
        
        if (enemyAttacking && inRange) {
            playerHealth -= 15;
            if (playerHealth <= 0) {
                std::cout << "Player defeated!" << std::endl;
            }
        }
    }
    
    bool isInAttackRange(int x1, int y1, int x2, int y2) {
        const int ATTACK_RANGE = 50;
        return abs(x1 - x2) < ATTACK_RANGE && abs(y1 - y2) < ATTACK_RANGE;
    }
    
    void constrainPositions(int& playerX, int& playerY, int& enemyX, int& enemyY) {
        const int SCREEN_WIDTH = 800;
        const int SCREEN_HEIGHT = 600;
        
        playerX = std::max(0, std::min(playerX, SCREEN_WIDTH));
        playerY = std::max(0, std::min(playerY, SCREEN_HEIGHT));
        enemyX = std::max(0, std::min(enemyX, SCREEN_WIDTH));
        enemyY = std::max(0, std::min(enemyY, SCREEN_HEIGHT));
    }
};

int main() {
    GameEngine engine;
    engine.updateGame(100, 100, 120, 120, 100, 50, true, false);
    return 0;
}