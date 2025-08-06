// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function validateApplicationConfig(config) {
    const validationRules = {
        database: ['host', 'port'],
        api: ['baseUrl', 'timeout'],
        logging: ['level', 'file']
    };
    
    for (const [section, requiredFields] of Object.entries(validationRules)) {
        const validationResult = validateConfigSection(config, section, requiredFields);
        if (!validationResult.isValid) {
            return validationResult;
        }
    }
    
    return { isValid: true, message: "Configuration is valid" };
}

function validateConfigSection(config, sectionName, requiredFields) {
    if (!config[sectionName]) {
        return {
            isValid: false,
            message: `Missing required section: ${sectionName}`
        };
    }
    
    const sectionConfig = config[sectionName];
    
    for (const field of requiredFields) {
        if (!sectionConfig[field]) {
            return {
                isValid: false,
                message: `${sectionName} configuration missing field: ${field}`
            };
        }
    }
    
    return {
        isValid: true,
        message: `${sectionName} configuration is valid`
    };
}
// {/fact}