const student = {
  id: 923482,
  money: 5000,
  name: "Minhajul Hasan",
  department: "Electrical",
  isRich: false,
  subjects: [
    "Generation of Electrical Power",
    "Renewable Energy",
    "Measurement 1",
    "Accounting",
    "Digital Electronics & Microprocessor",
    "Environmental Studies",
  ],
  bestFriend: {
    name: "Kundu",
    department: "Computer",
  },
  takeExam: function () {
    console.log(this.name, "taking exam");
  },
  treatDey: function (expense, boksis) {
    this.money = this.money - expense - boksis;
    return this.money;
  },
};
student.takeExam();
const remaining = student.treatDey(900, 100);
const remaining1 = student.treatDey(500, 50);
console.log(remaining1);
