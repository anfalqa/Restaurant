'use strict';
let foodCid=1;
let allfood=[];
function resForm(name, type, price){
    this.foodId=0;
    this.foodName = name;
    this.foodType= type;
    this.price = price;
    this.generatingID =function(){ 
        this.foodId=foodCid;
        foodCid=foodCid+1;
        return(this.foodId);
   },
   allfood.push(this);
};

resForm.prototype.render = function () {
    var id = this.generatingID();
    var name = this.foodName;
    var type = this.foodType;
    var price = this.price;
    var table = document.getElementById("tableData");
    var rowCount = table.rows.length;
    var row = table.insertRow(rowCount);
    row.insertCell(0).innerHTML=id;
    row.insertCell(1).innerHTML= name.value;
    row.insertCell(2).innerHTML= type.value;
    row.insertCell(3).innerHTML= price.value;
   }

  function handler(e){
    e.preventDefault();
    let Name = document.getElementById("name");
    let Type = document.getElementById("type");
    let price = document.getElementById("price");
    let food = new resForm(Name, Type, price);

    food.render();
  }
  let saveValues = document.getElementById('resForm');
  saveValues.addEventListener('submit', handler)