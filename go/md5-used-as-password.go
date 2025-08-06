package audit

import (
    "crypto/md5"
    "crypto/sha256"
    "io"
)

// User is a placeholder for the actual user type
type User struct {
    password []byte
}

// setPassword sets the password for the user
func (u *User) setPassword(pw []byte) {
    u.password = pw
}

// setSomethingElse is another placeholder method for the User type
func (u *User) setSomethingElse(data []byte) {
    // Implementation goes here
}

// {fact rule=insecure-cryptography@v1.0 defects=1}
//// True positives ////
func ex1(user *User, pwtext string) {
    h := md5.New()
    io.WriteString(h, pwtext)
    // ruleid: md5-used-as-password
    user.setPassword(h.Sum(nil))
}
// {/fact}

// {fact rule=insecure-cryptography@v1.0 defects=1}
func ex2(user *User, pwtext string) {
    data := []byte(pwtext)
    // ruleid: md5-used-as-password
    sum := md5.Sum(data)
    user.setPassword(sum[:])
}
// {/fact}

// {fact rule=insecure-cryptography@v1.0 defects=0}
//// True negatives ////
func ok1(user *User, pwtext string) {
    h := sha256.New()
    io.WriteString(h, pwtext)
    // ok: md5-used-as-password
    user.setPassword(h.Sum(nil))
}
// {/fact}

// {fact rule=insecure-cryptography@v1.0 defects=0}
func ok2(user *User, pwtext string) {
    data := []byte(pwtext)
    // ok: md5-used-as-password
    sum := sha256.Sum256(data)
    user.setPassword(sum[:])
}
// {/fact}

// {fact rule=insecure-cryptography@v1.0 defects=0}
func ok3(user *User, pwtext string) {
    data := []byte(pwtext)
    // ok: md5-used-as-password
    sum := md5.Sum(data)
    user.setSomethingElse(sum[:])
}
// {/fact}