import validator from 'validator';

export class AdvancedValidation {

    static isInvalidEmail = () => {
        const emailList = ['example@example.com', 'invalidEmail', 'another@example.com'];
        let incorrectEmails = [];
        emailList.forEach(element => {
            if(!validator.isEmail(element))
            {
                incorrectEmails.push(element);
            }
        });

        return incorrectEmails;
         // Output: false
    }
}
