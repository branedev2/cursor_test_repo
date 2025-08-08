//{fact rule=weak-random-number-generation@v1.0 defects=1}

function insecurePassword() {
    // BAD: the random suffix is not cryptographically secure
    var suffix = Math.random();
    var password = "myPassword" + suffix;
    return password;
}


//{/fact}
