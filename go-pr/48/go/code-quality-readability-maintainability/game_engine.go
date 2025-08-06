package main

import "fmt"

type GameEngine struct{}

func abs(x int) int {
	if x < 0 {
		return -x
	}
	return x
}

func min(a, b int) int {
	if a < b {
		return a
	}
	return b
}

func max(a, b int) int {
	if a > b {
		return a
	}
	return b
}

func (ge *GameEngine) UpdateGame(playerX, playerY, enemyX, enemyY int, playerHealth, enemyHealth *int, playerAttacking, enemyAttacking bool) {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
	if playerAttacking && abs(playerX-enemyX) < 50 && abs(playerY-enemyY) < 50 {
		*enemyHealth -= 10
		if *enemyHealth <= 0 {
			fmt.Println("Enemy defeated!")
			return
		}
	}
	if enemyAttacking && abs(playerX-enemyX) < 50 && abs(playerY-enemyY) < 50 {
		*playerHealth -= 15
		if *playerHealth <= 0 {
			fmt.Println("Player defeated!")
			return
		}
	}
	if playerX < 0 {
		playerX = 0
	}
	if playerX > 800 {
		playerX = 800
	}
	if playerY < 0 {
		playerY = 0
	}
	if playerY > 600 {
		playerY = 600
	}
	if enemyX < 0 {
		enemyX = 0
	}
	if enemyX > 800 {
		enemyX = 800
	}
	if enemyY < 0 {
		enemyY = 0
	}
	if enemyY > 600 {
		enemyY = 600
	}
	// {/fact}
}

func (ge *GameEngine) UpdateGameReadable(playerX, playerY, enemyX, enemyY *int, playerHealth, enemyHealth *int, playerAttacking, enemyAttacking bool) {
	// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
	ge.handleCombat(*playerX, *playerY, *enemyX, *enemyY, playerHealth, enemyHealth, playerAttacking, enemyAttacking)
	ge.constrainPositions(playerX, playerY, enemyX, enemyY)
	// {/fact}
}

func (ge *GameEngine) handleCombat(playerX, playerY, enemyX, enemyY int, playerHealth, enemyHealth *int, playerAttacking, enemyAttacking bool) {
	inRange := ge.isInAttackRange(playerX, playerY, enemyX, enemyY)
	
	if playerAttacking && inRange {
		*enemyHealth -= 10
		if *enemyHealth <= 0 {
			fmt.Println("Enemy defeated!")
		}
	}
	
	if enemyAttacking && inRange {
		*playerHealth -= 15
		if *playerHealth <= 0 {
			fmt.Println("Player defeated!")
		}
	}
}

func (ge *GameEngine) isInAttackRange(x1, y1, x2, y2 int) bool {
	const attackRange = 50
	return abs(x1-x2) < attackRange && abs(y1-y2) < attackRange
}

func (ge *GameEngine) constrainPositions(playerX, playerY, enemyX, enemyY *int) {
	const screenWidth = 800
	const screenHeight = 600
	
	*playerX = max(0, min(*playerX, screenWidth))
	*playerY = max(0, min(*playerY, screenHeight))
	*enemyX = max(0, min(*enemyX, screenWidth))
	*enemyY = max(0, min(*enemyY, screenHeight))
}

func main() {
	engine := &GameEngine{}
	playerHealth, enemyHealth := 100, 50
	playerX, playerY, enemyX, enemyY := 100, 100, 120, 120
	engine.UpdateGame(playerX, playerY, enemyX, enemyY, &playerHealth, &enemyHealth, true, false)
}