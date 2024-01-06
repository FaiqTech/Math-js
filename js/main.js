//* 6. Bir sıra ən yüksək dəyəri tapmaq üçün JavaScript funksiyası yazın.

function maxNum(array) {
  if (array.length) {
    return Math.max(...array);
  } else {
    return "Array boşdur";
  }
}

var array = [3, 7, 1, 9, 4, 2, 8];
var ənBöyükDəyər = maxNum(array);
console.log("Ən böyük dəyər:", ənBöyükDəyər);

//* 7. Bir sıra ən aşağı dəyəri tapmaq üçün JavaScript funksiyası yazın.

function minNum(array) {
  if (array.length) {
    return Math.min(...array);
  } else {
    return "Array boşdur";
  }
}

// Nümunə istifadə
var array = [3, 7, 1, 9, 4, 2, 8];
var ənAşağıDəyər = minNum(array);
console.log("Ən aşağı dəyər:", ənAşağıDəyər);

//* 16. Dəyişənin ədədi olub olmadığını yoxlamaq üçün JavaScript funksiyası yazın.

function isNumerical(variable) {
  if (typeof variable === "number" && !isNaN(variable)) {
    return true;
  } else {
    return false;
  }
}

var num1 = 42;
var num2 = "123";
var str = "Hello";

console.log(isNumerical(num1)); // true
console.log(isNumerical(num2)); // false
console.log(isNumerical(str)); // false

//*  17. Bir sıra dəyərlərin cəmini hesablamaq üçün JavaScript funksiyası yazın.

function arrayinCemi(array) {
  let cem = 0;

  for (let i = 0; i < array.length; i++) {
    cem += array[i];
  }

  return cem;
}

var array = [1, 2, 3, 4, 5];

console.log("Arrayin cəmi: " + arrayinCemi(array)); // 15

//* 18. Bir sıra dəyərlər məhsulunu hesablamaq üçün JavaScript funksiyası yazın.

function arrayinHasili(array) {
  if (array.length === 0) {
    return 0; // Əgər array boşdursa, hasil 0 olmalıdır.
  }

  let hasil = 1;

  for (let i = 0; i < array.length; i++) {
    hasil *= array[i];
  }

  return hasil;
}

var array = [1, 2, 3, 4, 5];

console.log("Arraydekilerin hasili: " + arrayinHasili(array)); // 120

//* 19. JavaScript-də Pifaqor funksiyası yaradın.
//? c² = a² + b²

function pythagorean(a, b) {
  var c = Math.sqrt(Math.pow(a, 2) + Math.pow(b, 2));
  return c;
}

var a = 3;
var b = 4;

console.log("c : " + pythagorean(a, b)); // 5

//* 26. Bir nömrənin kökünü hesablamaq üçün JavaScript funksiyası yazın.

var n = +prompt("ededi daxil edin");

var cavab = n ** (1 / 2);

console.log(cavab);

//*28. Tam bir dəyəri 5-in növbəti çoxluğuna yuvarlaqlaşdırmaq üçün JavaScript funksiyası yazın.

function int_round5(ədəd) {
  //ceil tam ededin 1 usdun gotrur
  return Math.ceil(ədəd / 5) * 5;
}

var ədəd = 13;

console.log(int_round5(ədəd)); // 15

//* 29. Müsbət ededi mənfi edede çevirmək üçün JavaScript funksiyası yazın.

function musbetdenMenfiyeCevir(eded) {
  // math.abs  normalda musbet qaytarir
  return -Math.abs(eded);
}

var eded = 42;

console.log("Müsbət ədədi mənfiyə çevir: " + musbetdenMenfiyeCevir(eded)); // -42

//*  32. Bir ədədin faizini (%) hesablamaq üçün JavaScript funksiyası yazın.

function faiziHesabla(ədəd, faizDərəcəsi) {
  if (faizDərəcəsi < 0 || faizDərəcəsi > 100) {
    return " Faiz dərəcəsi 0 və 100 aralığında olmalıdır.";
  }

  var faizMiqdarı = (ədəd * faizDərəcəsi) / 100;
  return faizMiqdarı;
}

var ədəd = 1000;
var faizDərəcəsi = 5;

console.log(faiziHesabla(ədəd, faizDərəcəsi)); // 50
