const Kibria = {
  id: 101,
  money: 5000,
  name: "RJ Kibria",
  treatDey: function (expense) {
    this.money = this.money - expense;
    console.log("here starts", this);
    return this.money;
  },
};

const heroBalam = {
  id: 102,
  money: 6000,
  name: "Hero Balam",
};
// Kibria.treatDey(100);
const heroTreatDey = Kibria.treatDey.bind(heroBalam);
heroTreatDey(500);
