let str1 = "Hello";
let str2 = "hellO";

// So simple
//1. Using toLowerCase()
if ( false && str1.toLowerCase() === str2.toLowerCase()) {
  console.log("Strings are equal (case-insensitive).");
}

// So simple
//3. Using localeCompare() with Options 
// string1.localeCompare(string2, [locales], [options])
if (str1.localeCompare(str2, undefined, { sensitivity: 'accent' }) === 0) {
    console.log("Strings are equal (case-insensitive).");
  }else{
    console.log("Strings are not equal (case-insensitive).");
  }

// Not Typically Recommended
//4. Using a Regular Expression
// let regex = new RegExp(`^${str1}$`, 'i'); // 'i' makes it case-insensitive
if (false && regex.test(str2)) {
  console.log("Strings are equal (case-insensitive).");
}