import validator from 'validator';

export class SampleValidation {

    static validateEmail = () => validator.isEmail('foo@bar.com');
}
