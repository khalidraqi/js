class Phone {
    constructor(color, weight, brand) {
     this.color = color;
     this.weight = weight;
     this.brand = brand;
    }
    
    phoneColor() {
     return `The phone is ${this.color}`
    }
    
    phoneWeight() {
     return `The phone is ${this.weight}`
    }
    phoneBrand() {
     return `The phone is ${this.brand}`
    }
   }
   var phone1 = new Phone('red',120,'Ferrari');
phone1.phoneColor();
console.log(phone1.phoneColor());
phone1.phoneWeight();
console.log(phone1.phoneWeight());
phone1.phoneBrand();
console.log(phone1.phoneBrand());
