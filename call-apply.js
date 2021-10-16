const Kibria = {
  id: 101,
  money: 5000,
  name: "RJ Kibria",
  treatDey: function (expense, boksis, tax) {
    this.money = this.money - expense - boksis - tax;
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
// heroTreatDey(500);

// Kibria.treatDey.call(heroBalam, 500, 100, 50);
// Kibria.treatDey.call(heroBalam, 300, 50, 30);

Kibria.treatDey.apply(heroBalam, [500, 100, 50]);
Kibria.treatDey.apply(heroBalam, [1000, 200, 150]);
