const normalPerson = {
  firstName: "Rahim",
  lastname: "Uddin",
  salary: 1500,
  getFullName: function () {
    console.log(this.firstName, this.lastname);
  },
  chargeBill: function (amount) {
    this.salary = this.salary - amount;
    return this.salary;
  },
};
normalPerson.chargeBill(100);
normalPerson.chargeBill(400);
console.log(normalPerson.salary);
