import { LightningElement } from 'lwc';
import templateOne from './templateOne.html';
import templateTwo from './templateTwo.html';

export default class HelloBinding extends LightningElement {

templateOne = true;

    render() {
       return this.templateOne ? templateOne : templateTwo;
}

    switchTemplate(){ 
        this.templateOne = this.templateOne === true ? false : true; 
    }



    contacts = [
        {
            Id: 1,
            Name: 'Amy Taylor',
            Title: 'VP of Engineering',
        },
        {
            Id: 2,
            Name: 'Michael Jones',
            Title: 'VP of Sales',
        },
        {
            Id: 3,
            Name: 'Jennifer Wu',
            Title: 'CEO',
        },
    ];
    
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

    areDetailsVisible = false;

    handleChangeB(event) {
        this.areDetailsVisible = event.target.checked;
    }
}
