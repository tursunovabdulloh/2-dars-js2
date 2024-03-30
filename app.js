// 1. JavaScript-da Car classi yarating va uning konstruktori orqali brand va year xususiyatlarini o'z ichiga olsin. Keyin ushbu classdan bir nechta avtomobil obyektlarini yarating.

// 2. Car classini kengaytirib, ElectricCar classini yarating. ElectricCar classi Car classining barcha xususiyatlariga ega bo'lishi kerak va qo'shimcha ravishda batteryLife xususiyatini ham o'z ichiga olishi kerak.

//  3. Metodlar: Car classiga displayInfo deb nomlangan metod qo'shing, bu metod avtomobilning markasi va ishlab chiqarilgan yilini konsolga chiqaradi. Keyin ushbu metodni ElectricCar classidagi obyekt uchun ham sinab ko'ring.

//  4. Darsta korilgan usullar bilan(4 ta usulni ko'rdik) html dagi taglarni textini o'zgartiring.
// 1-masala
// class car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
// }
// class newCar extends car {
//   constructor(brand, year, color) {
//     super(brand, year);
//     this.color = color;
//   }
// }
// let equinox = new newCar("equinox", 2024, "black");
// console.log(equinox);
// let cobolt = new newCar("cobolt", 2022, "white");
// console.log(cobolt);
// 2-masala
// class car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
// }
// class ElectricCar extends car {
//   constructor(brand, year, color, baterylife) {
//     super(brand, year);
//     this.color = color;
//     this.baterylife = baterylife;
//   }
// }
// let tesla = new ElectricCar("tesla x-3", 2024, "electric_color", "10000w");
// console.log(tesla);
// 3-masala
// class car {
//   constructor(brand, year) {
//     this.brand = brand;
//     this.year = year;
//   }
// }
// class ElectricCar extends car {
//   constructor(brand, year, color, baterylife) {
//     super(brand, year);
//     this.color = color;
//     this.baterylife = baterylife;
//   }
//   displayInfo() {
//     console.log("tesla x-3", "2024 - yil");
//   }
// }
// let tesla = new ElectricCar("tesla x-3", 2024, "electric_color", "10000w");
// console.log(tesla);
// tesla.displayInfo();
//4-masala
// 1-usul
// let item1 = document.getElementById("el1");
// console.log(item1.textContent);
// console.log((item1.textContent = "moshina-1"));
//2-usul
// let item2 = document.getElementsByClassName("item2");
// [...item2].forEach((el, ind) => {
//   console.log((el.textContent = ` ikrom - ${ind + 1}`));
// });
//3-usul
// let item3 = document.getElementsByTagName("li");
// [...item3].forEach((el, ind) => {
//   console.log((el.textContent = `aziz`));
// });
//4-usul
let item = document.querySelectorAll(".item");
console.log(
  item.forEach((el) => {
    console.log((el.textContent = "4-usul qale ekan"));
  })
);
