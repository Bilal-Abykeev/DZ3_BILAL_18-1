//Первое задание

var str = "*";
while (str.length<=7){
	console.log(str + "\n");
	str+="*";
}


//второе задание FizzBuzz

for (var i = 1; i <= 100; i++) {
    if (i % 3 == 0) {
        console.log('Fizz');
    }
    if (i % 5 == 0) {
        console.log('Buzz');
    }
    if ((i % 3 == 0) && (i % 5 == 0)) {
        console.log('FizzBuzz');   
    }
    if ((i % 3 != 0) && (i % 5 != 0)) {
        console.log(i);
    }
}


//шахматная доска


for (q = 1; q <= 4; q ++) {
    var l = "#";
    for (var cont = 1; cont < 4; cont ++)
    l += ' #';
    console.log(l);
    var m ='';
    for (var cont = 0; cont < 4; cont ++)
    m += ' #';
    console.log(m);
}

