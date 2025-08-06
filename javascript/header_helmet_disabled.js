// {fact rule=protection-mechanism-failure@v1.0 defects=1}
// ruleid:helmet_feature_disabled
app.use(helmet({
    frameguard: false,
}))
// {/fact}


// {fact rule=protection-mechanism-failure@v1.0 defects=1}
// ruleid:helmet_feature_disabled
app.use(helmet({
    "xssFilter": false
}))
// {/fact}
