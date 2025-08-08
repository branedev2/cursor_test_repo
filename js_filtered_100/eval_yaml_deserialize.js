// // The Semgrep considers "untrusted_code" variable as valid external source, but it's hardcoded string.
// // CodeGuru does not consider hardcoded values as external input and avoid giving detection.
// // This case is intentional. Commenting out this case.

// var untrusted_code = '"toString": !<tag:yaml.org,2002:js/function> "function (){very_evil_thing();}"';
// var notneeded = 1;
// // {ex-fact rule=untrusted-deserialization@v1.0 defects=1}

// // I'm just converting that string, what could possibly go wrong?
// // ruleid:yaml_deserialize
// require('js-yaml').load(untrusted_code) + ''
// // {/ex-fact}


// var yaml = require('js-yaml')

// const yaml2 = require('js-yaml')
// // {ex-fact rule=untrusted-deserialization@v1.0 defects=1}

// // ruleid:yaml_deserialize
// yaml.load(untrusted_code)
// // {/ex-fact}

// // {ex-fact rule=untrusted-deserialization@v1.0 defects=1}

// // ruleid:yaml_deserialize
// yaml2.load(untrusted_code)
// // {/ex-fact}