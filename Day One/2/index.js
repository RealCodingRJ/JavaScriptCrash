function convertBase(a) {
    return parseInt(a, 16)
}

async function getMessage(message) {
    return message;
}

class Main {
    constructor(lName, fName, age, color, colorHex) {
        this.fName = fName;
        this.lName = lName;
        this.age = age;
        this.color = color;
        this.colorHex = colorHex;

    }

    getFullName() {

        let person = {
            lName: this.lName,
            fName: this.fName,
            age: this.age
        }

        let {age, fName, lName} = person;

        getMessage(fName + " " + lName + " " + age).then(e => console.log(e));

    }

    getAge() {

    let person = {
        lName: this.lName,
        fName: this.fName,
        age: this.age
    }

        let {age, fName, lName} = person;
        getMessage(`${fName} ${lName} You Are ${age} Years Old`).then(e => console.log(e));
    }

    getColors() {

        let person = {

            color: this.color,
            hex: this.colorHex,
        }

        getMessage(person).then(e => console.log(e.color, e.hex));
    }
}



const person = new Main('Gregoire', "Ryan", 25, convertBase("ff"), "white");

try {

    person.getFullName()
    person.getAge()
    person.getColors()

    getMessage("Hello its Working..").then(e => console.log(e));

} catch(err) {
    console.error(err);
}

