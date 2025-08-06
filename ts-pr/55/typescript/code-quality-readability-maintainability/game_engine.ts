class GameEngine {
    updateGame(playerX: number, playerY: number, enemyX: number, enemyY: number, 
               playerHealth: { value: number }, enemyHealth: { value: number }, 
               playerAttacking: boolean, enemyAttacking: boolean): void {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        if (playerAttacking && Math.abs(playerX - enemyX) < 50 && Math.abs(playerY - enemyY) < 50) {
            enemyHealth.value -= 10;
            if (enemyHealth.value <= 0) {
                console.log('Enemy defeated!');
                return;
            }
        }
        if (enemyAttacking && Math.abs(playerX - enemyX) < 50 && Math.abs(playerY - enemyY) < 50) {
            playerHealth.value -= 15;
            if (playerHealth.value <= 0) {
                console.log('Player defeated!');
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

    updateGameReadable(playerPos: { x: number, y: number }, enemyPos: { x: number, y: number },
                      playerHealth: { value: number }, enemyHealth: { value: number },
                      playerAttacking: boolean, enemyAttacking: boolean): void {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        this.handleCombat(playerPos, enemyPos, playerHealth, enemyHealth, playerAttacking, enemyAttacking);
        this.constrainPositions(playerPos, enemyPos);
        // {/fact}
    }

    private handleCombat(playerPos: { x: number, y: number }, enemyPos: { x: number, y: number },
                        playerHealth: { value: number }, enemyHealth: { value: number },
                        playerAttacking: boolean, enemyAttacking: boolean): void {
        const inRange = this.isInAttackRange(playerPos, enemyPos);
        
        if (playerAttacking && inRange) {
            enemyHealth.value -= 10;
            if (enemyHealth.value <= 0) {
                console.log('Enemy defeated!');
            }
        }
        
        if (enemyAttacking && inRange) {
            playerHealth.value -= 15;
            if (playerHealth.value <= 0) {
                console.log('Player defeated!');
            }
        }
    }

    private isInAttackRange(pos1: { x: number, y: number }, pos2: { x: number, y: number }): boolean {
        const attackRange = 50;
        return Math.abs(pos1.x - pos2.x) < attackRange && Math.abs(pos1.y - pos2.y) < attackRange;
    }

    private constrainPositions(playerPos: { x: number, y: number }, enemyPos: { x: number, y: number }): void {
        const screenWidth = 800;
        const screenHeight = 600;
        
        playerPos.x = Math.max(0, Math.min(playerPos.x, screenWidth));
        playerPos.y = Math.max(0, Math.min(playerPos.y, screenHeight));
        enemyPos.x = Math.max(0, Math.min(enemyPos.x, screenWidth));
        enemyPos.y = Math.max(0, Math.min(enemyPos.y, screenHeight));
    }
}

const engine = new GameEngine();
const playerHealth = { value: 100 };
const enemyHealth = { value: 50 };
engine.updateGame(100, 100, 120, 120, playerHealth, enemyHealth, true, false);