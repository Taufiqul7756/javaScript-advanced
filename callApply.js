const normalPerson = {
  firstName: "Rahim",
  lastName: "Uddin",
  salary: 10000,

  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },

  chargeBill: function (amount, tips, tax) {
    this.salary = this.salary - amount - tips - tax;
    return this.salary;
  },
};

console.log("Rahim's salary:", normalPerson.salary);
normalPerson.chargeBill(100);
normalPerson.chargeBill(400);
//console.log("Rahim(10000):", normalPerson.salary);

const heroPerson = {
  firstName: "Hero",
  lastName: "Balam",
  salary: 25000,
};

const friendlyPerson = {
  firstName: "Hero",
  lastName: "gulam",
  salary: 20000,
};

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson, 990, 10); //call and bind er coma(,) use korbo
heroChargeBill(2000);
heroChargeBill(3000);
console.log("Hero Person(25000):", heroPerson.salary);

const friendlyPersonChargeBill = normalPerson.chargeBill.bind(
  friendlyPerson,
  990,
  10
);
friendlyPersonChargeBill(5000);
console.log("Friendly Person (20000):", friendlyPerson.salary);

normalPerson.chargeBill.apply(heroPerson, [3000, 300, 200]); //apply er jnno array use korbo
console.log(heroPerson);
