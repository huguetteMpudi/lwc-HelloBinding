import { LightningElement } from 'lwc';

export default class HelloBinding extends LightningElement {
    greeting = 'World';
    firstName = '';
    lastName = '';

    handleChangeA(event) {
        this.greeting = event.target.value;
    }

    handleChange(event) {
        const field = event.target.name;
        if (field === 'firstName') {
            this.firstName = event.target.value;
        } else if (field === 'lastName') {
            this.lastName = event.target.value;
        }
    }

    get uppercasedFullName() {
        return `${this.firstName} ${this.lastName}`.toUpperCase();
    }
}
