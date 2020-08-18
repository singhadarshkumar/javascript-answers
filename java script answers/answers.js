// EASY ANSWERS
// Q1

function time_convert(num) {
  var seconds = Math.floor(num * 60);
  return seconds;
}

console.log(time_convert(5));
console.log(time_convert(3));
console.log(time_convert(2));

///////////////////////////////////////////////////

//Q2

function fun(num1, num2) {
  if (num1 % num2 == 0) {
    return true;
  } else {
    return false;
  }
}

console.log(fun(50, 5));
console.log(fun(30, 3));
console.log(fun(22, 3));

////////////////////////////////////////////////////

//EASY
//Q1

function char_count(str, letter) {
  var Count = 0;
  for (var i = 0; i < str.length; i++) {
    if (str.charAt(i) == letter) {
      Count += 1;
    }
  }
  return Count;
}

console.log(char_count("apple", "a"));
console.log(char_count("Adarsh", "a"));
console.log(char_count("big fat bubbles", "b"));

///////////////////////////////////////////////////////

//Q2
function add_up(num) {
  var a = 0;
  for (var i = 1; i <= num; i++) {
    a += i;
  }
  return a;
}
console.log(add_up(3));

//////////////////////////////////////////////////////////

//Q3 .... coded in .html file
<!DOCTYPE html>
<html>
<body>
<span id="mySpan">Hello World!</span>
<script>

  var span = document.getElementById('mySpan');
  span.innerHTML = removeVowels(span.innerHTML);
  function removeVowels(str) 
  {
  var a=str.replace(/[a]/gi, '1');
  var e=a.replace(/[e]/gi, '2');
  var i=e.replace(/[i]/gi, '3');
  var o=i.replace(/[o]/gi, '4');
  var u=o.replace(/[u]/gi, '5');
  return u;
  }
</script>
</body>
</html>
//////////////////////////////////////////////////////////

//MEDIUM
//Q1
function specialReverse(str, word) {
    var strsplit=str.toLowerCase().split(' ');
    for(var i=0; i<strsplit.length;i++){
        if(strsplit[i].startsWith(word)){
           var rev= strsplit[i].split("").reverse().join("");
           strsplit.splice(i,1,rev);
        }
    }
   str = strsplit.join(' ');
   console.log(str);

}

specialReverse ("first man to WaLK on the moon", "m");
specialReverse ("word searches are super fun", "s");
specialReverse ("peter piper picked pickled peppers", "p");
/////////////////////////////////////////////////////////////

// Q2
function similar(s) {
  if (s[0] === s[1] && s[0] === s[2] && s[0] === s[3]) {
    return true;
  } else {
    return false;
  }
}

var s = ["Saab", "Volvo", "BMW"];
var a = ["ER", "E$", "ER", "ER"];
var z = ["$", "$", "$", "$"];

console.log(similar(s));
console.log(similar(a));
console.log(similar(z));

///////////////////////////////////////////////////////////

// Q3

function dup(array) {
  var y = [];
  for (i = 0; i < array.length; i++) {
    if (y.indexOf(array[i]) === -1) {
      y.push(array[i]);
    }
  }
  return y;
}

var names = ["fire", "water", "snow", "fire", "storm", "dust"];
console.log(dup(names));

/////////////////////////////////////////////////////////////////

//HARD

//Q1

function realType(value)
{ 
  if(Array.isArray(value))
{ 
  
  return document.write('array'+"</br>") 
  } 
  else if
  (value==null)
  { return document.write('null'+"</br>") 
  } 
  else
  { return document.write(typeof value+"</br>"); 
  }
  }
  console.log(realType([]));
  console.log(realType(5));
  console.log(realType('a'));
  console.log(realType(null));
/////////////////////////////////////////////////////////////////////

//Q2
a1 = ["1a", "a", "2b", "b"];
a2 = ["abc", "abc10"];
a3 = ["abc", "abc10c", "a10bc", "bcd"];
a4 = ["this is a test", "test1"];

b = foo = (a) => {
  f = []; // Final Array

  a.forEach((element) => {
    flag1 = 0; 
    flag2 = 0;
    b = element.split(""); 

    b.forEach((c) => {
      
      d = c.charCodeAt(0); 
      if (d >= 48 && d < 58) {
        flag1 = 1;
      }
      if ((d >= 65 && d < 91) || (d >= 97 && d < 123)) {
        flag2 = 1;
      }
    });
    if (flag1 + flag2 == 2) {
      f.push(element);
    }
  });
  return f;
};

console.log(foo(a1));
console.log(foo(a2));
console.log(foo(a3));
console.log(foo(a4));
