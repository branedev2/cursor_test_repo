class DataValidator {
    validateUserInput(email: string, phone: string, age: number, name: string): boolean {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=1}
        if (!email || !email.includes('@') || !email.includes('.')) {
            return false;
        }
        if (!phone || phone.length < 10 || phone.length > 15) {
            return false;
        }
        if (age < 0 || age > 150) {
            return false;
        }
        if (!name || name.length < 2 || name.length > 50) {
            return false;
        }
        for (const c of phone) {
            if (!/[\d\-\s\(\)]/.test(c)) {
                return false;
            }
        }
        for (const c of name) {
            if (!/[a-zA-Z\s\-']/.test(c)) {
                return false;
            }
        }
        return true;
        // {/fact}
    }

    validateUserInputReadable(email: string, phone: string, age: number, name: string): boolean {
        // {fact rule=code-quality-readability-maintainability@v1.0 defects=0}
        return this.isValidEmail(email) &&
               this.isValidPhone(phone) &&
               this.isValidAge(age) &&
               this.isValidName(name);
        // {/fact}
    }

    private isValidEmail(email: string): boolean {
        if (!email) {
            return false;
        }
        const emailPattern = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
        return emailPattern.test(email);
    }

    private isValidPhone(phone: string): boolean {
        if (!phone || phone.length < 10 || phone.length > 15) {
            return false;
        }
        
        const phonePattern = /^[\d\-\s\(\)]+$/;
        return phonePattern.test(phone);
    }

    private isValidAge(age: number): boolean {
        return age >= 0 && age <= 150;
    }

    private isValidName(name: string): boolean {
        if (!name || name.length < 2 || name.length > 50) {
            return false;
        }
        
        const namePattern = /^[a-zA-Z\s\-']+$/;
        return namePattern.test(name);
    }
}

const validator = new DataValidator();
const isValid = validator.validateUserInput('test@email.com', '123-456-7890', 25, 'John Doe');
console.log(`Valid: ${isValid}`);