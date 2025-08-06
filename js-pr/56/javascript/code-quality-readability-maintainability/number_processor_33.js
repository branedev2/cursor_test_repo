// {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
function processNumberList(numbers) {
    return numbers.map(number => {
        if (number % 2 === 0) {
            return processEvenNumber(number);
        } else {
            return processOddNumber(number);
        }
    });
}

function processEvenNumber(number) {
    if (number > 10 && number < 100) {
        return number * 2;
    } else if (number >= 100) {
        return number / 2;
    } else {
        return number + 1;
    }
}

function processOddNumber(number) {
    return number > 5 ? number - 1 : number + 3;
}
// {/fact}