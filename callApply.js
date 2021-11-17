const normalPerson = {
  firstName: "Rahim",
  lastName: "Uddin",
  salary: 10000,
  getFullName: function () {
    console.log(this.firstName, this.lastName);
  },
  chargeBill: function (amount) {
    this.salary = this.salary - amount;
    return this.salary;
  },
};
normalPerson.chargeBill(100);
normalPerson.chargeBill(400);
console.log("Rahim(10000):", normalPerson.salary);

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

const heroChargeBill = normalPerson.chargeBill.bind(heroPerson);
heroChargeBill(2000);
heroChargeBill(3000);
console.log("Hero Person(25000):", heroPerson.salary);

const friendlyPersonChargeBill = normalPerson.chargeBill.bind(friendlyPerson);
friendlyPersonChargeBill(5000);
console.log("Friendly Person (20000):", friendlyPerson.salary);
