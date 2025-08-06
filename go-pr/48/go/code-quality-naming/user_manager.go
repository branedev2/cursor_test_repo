package main

import "fmt"

type UserManager struct {
	// {fact rule=code-quality-naming@v1.0 defects=1}
	u   []string
	cnt int
	flg bool
	// {/fact}
	
	// {fact rule=code-quality-naming@v1.0 defects=0}
	userList            []string
	activeUserCount     int
	isSystemInitialized bool
	// {/fact}
}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (um *UserManager) add(n string) {
	um.u = append(um.u, n)
	um.cnt++
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (um *UserManager) AddUser(username string) {
	um.userList = append(um.userList, username)
	um.activeUserCount++
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=1}
func (um *UserManager) del(idx int) bool {
	if idx >= 0 && idx < len(um.u) {
		um.u = append(um.u[:idx], um.u[idx+1:]...)
		um.cnt--
		return true
	}
	return false
}
// {/fact}

// {fact rule=code-quality-naming@v1.0 defects=0}
func (um *UserManager) RemoveUserByIndex(userIndex int) bool {
	if userIndex >= 0 && userIndex < len(um.userList) {
		um.userList = append(um.userList[:userIndex], um.userList[userIndex+1:]...)
		um.activeUserCount--
		return true
	}
	return false
}
// {/fact}

func main() {
	manager := &UserManager{}
	manager.add("john")
	fmt.Printf("User count: %d\n", manager.cnt)
}