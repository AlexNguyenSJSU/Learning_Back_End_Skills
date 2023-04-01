const menu = {
    _meal: '',
    _price: 0,
  
    set meal (mealToCheck) {
      if (typeof mealToCheck === "string") {
        return this._meal = mealToCheck;
      }
    },
  
    set price (priceToCheck) {
      if (typeof priceToCheck === "number") {
        return this._price = priceToCheck;
      }
    },
  
    get todaysSpecial() {
      if (this._meal && this._price) {
        return `Today's Special is ${this._meal} for ${this._price}!`;
      }
      else {
        return 'Meal or price was not set correctly';
      }
    }
}
  
//Testing the privacy of menu object:
//menu._meal = 10;
//menu._price = 'HAnh';
//console.log(menu);
  
//Testing the functionalities of menu obj: 2 setter methods:
menu.meal = 'Banh Mi Thap Cam';
menu.price = 5;
console.log(menu);
  
//Testing for printing out the meal and its price:
console.log(menu.todaysSpecial);