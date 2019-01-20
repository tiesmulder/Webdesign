export function basic1() {
    var x = document.getElementById('B11').value;
    var y = document.getElementById('B12').value;
    var z = document.getElementById('B13').value;
    var w = document.getElementById('B14').value;

    var ans = document.getElementById('B1');

    ans.innerHTML = 'The average of ' + x + ', ' + y + ', ' + z + ', ' + w + ' = ' + (+x + +y + +z + +w) / 4;
}

export function basic2() {
    var x = document.getElementById('B21').value;
    var y = document.getElementById('B22').value;
    var z = document.getElementById('B23').value;

    var ans = document.getElementById('B2');

    ans.innerHTML = 'Result of specified numbers ' + x + ', ' + y + ', ' + z + ': '+ '(x + y) * z = '
                    + ((+x + +y) * z) + ' and x * y + y * z = ' + (+(x * y) + +(y * z));
}

export function basic3() {
    var str = document.getElementById('B31').value;
    
    var firstLetter = str.substring(0, 1);
    var lastLetter = str.substring(str.length - 1);
    var restLetter = str.substring(1, str.length - 1);
    var newStr = lastLetter + restLetter + firstLetter;

    var ans = document.getElementById('B3');

    ans.innerHTML = 'String: ' + str + ' || Outcome: ' + newStr;
}

export function basic4() {
    const value = 20;

    var x = document.getElementById('B41').value;
    var y = document.getElementById('B42').value;
    var abstractX = x - value;
    var abstractY = y - value;
    var result;
    var ans = document.getElementById('B4');

    if (Math.abs(x) == Math.abs(y))
    {
        result = 0;
    }
    else if ((x >= value || y >= value) && x < y)
    {
        result = x;
    }
    else if ((x >= value || y >= value) && x < y)
    {
        result = y;
    }
    else if (abstractX < abstractY && Math.abs(x) != Math.abs(y))
    {
        result = y;
    }
    else if ((abstractX < 0 || abstractY < 0) && (abstractX > abstractY && Math.abs(x) != Math.abs(y)))
    {
        result = x;
    }

    ans.innerHTML = 'First integer: ' + x + ' || Second integer: ' + y + ' || Answer: ' + result;
}

export function basic5() {
    var y = document.getElementById('B51').value;
    var minY = y - 5;
    var plusY = +y + 5;
    var text = "";
    var i;
    var ansX = document.getElementById('B5x');
    var ansY = document.getElementById('B5y');

    for (i = minY; i <= plusY; i++)
    {
        var uitkomst = (i * i) - (2 * i) + +1;
        text += 'x=(' + i + ')² - 2 * (' + i + ') + 1 = ' + uitkomst + '<br>';
    }
    
    ansX.innerHTML = text;
}

export function basic6() {
    var input = document.getElementById('B61').value;
    var x = input.charAt(0);
    var letters = /^[0-9a-zA-Z]+$/;
    var xCharcode = x.charCodeAt(0);
    var y = "";

    var ans = document.getElementById('B6');

    if ((x == 'a') || (x == 'e') || (x == 'i') ||
    (x == 'o') || (x == 'u')) 
    {
        y = "It's a vowel";
    }
    else if ((xCharcode > 47) && (xCharcode < 58))
    {
        y = "It's a digit";
    }
    else if (x.match(letters))
    {
        if ((xCharcode > 64) && (xCharcode <  91))
        {
            y = "It's an uppercase letter";
        }
        else 
        {
            y = "It's a lowercase Letter";
        }
    }
    else
    {
        y = "It's another symbol";
    }
    if (input.length > 1)
    {
        alert("Het programma pakt altijd het eerste character. Voor de volgende keer gewoon eentje graag.");
    }
        ans.innerHTML = y;
    }

    export function basic7() {
        var x = document.getElementById('B71').value;
        var y = x.toString(x, 2)

        var ans = document.getElementById('B7');

        ans.innerHTML = "Input: " + x + " || Binary: " + parseInt(x, 10).toString(2);
    }

    export function conditionalStatement1() {
        var input = document.getElementById('CD11').value;
        var x = input.charAt(0);
        var ans = document.getElementById('CD1');
        var letters = /^[0-9a-zA-Z]+$/;
        var y = "";

        if (!x.match(letters))
        {
            alert("Een letter uit het alphabet graag.");
        }
        else
        {
            if (input.length > 1)
            {
                alert("Het programma pakt altijd het eerste character. Voor de volgende keer gewoon eentje graag.");
            }
                if ((x == 'a') || (x == 'e') || (x == 'i') ||
                (x == 'o') || (x == 'u')) 
                {
                    y = "It's a vowel";
                }
                else
                {
                    y = "It's a consonant"
                }
        }

        ans.innerHTML = "Input: " + x + " || Outcome: " + y;
    }

    export function forLoop1() {
        var i;
        var text = "";
        var ans = document.getElementById('FL1');
        var sum = []

        for (i = 0; i <= 10; i++)
        {
            text += i + ", ";
            sum.push(i);
        }

        ans.innerHTML = "The first 10 natural numbers are: <br> " + text + " And the sum of these numbers is: " + sum.reduce((a, b) => a + b, 0);
    }

    export function forLoop2() {
        var i;
        var j;
        var text = "";
        var ans = document.getElementById('FL2');

        for (i = 1; i <= 4; i++)
        {
            for (j = 1; j <= i; j++)
            {
                text += i;
            }
            text += "<br>";
        }
        ans.innerHTML = text;
    }

    export function forLoop3() {
        var i;
        var j;
        var k;
        var text = "";
        var ans = document.getElementById('FL3');

        for (i = 1; i <= 5; i++)
        {
            for (k = 5; k >= i; k--)
            {
                text += "/";
            }
            for (j = 1; j <= i; j++)
            {
                text += " *";
            }
            text += "<br>"
        }
        ans.innerHTML = text;
    }

    export function array1() {
        var inputX = document.getElementById('AR11').value;
        var inputY = document.getElementById('AR12').value;
        var inputZ = document.getElementById('AR13').value;

        var x = parseInt(inputX, 32);
        var y = parseInt(inputY, 32);
        var z = parseInt(inputZ, 32);

        var array = [];
        var sum = 0;

        array.push(x);
        array.push(y);
        array.push(z);

        for (var i = 0; i < array.length; i++) {
            sum += array[i]
        }

        var ans = document.getElementById('AR1');

        ans.innerHTML = "The sum of all the numbers in the array is: " + sum;   // + array.reduce((a, b) => a + b, 0);
    }

    export function array2() {
        var i;
        var j;
        var array = [];
        var unique = [];
        var detected = false;
        var x = document.getElementById('AR21').value;
        var y = document.getElementById('AR22').value;
        var z = document.getElementById('AR23').value;

        var ans = document.getElementById('AR2');

        array.push(x);
        array.push(y);
        array.push(z);

        for (i = 0; i < array.length; i++)
        {
            detected = false;

            for (j = 0; j < array.length; j++)
            {
                if (i!=j)
                {
                    if (array[i] == array[j])
                    {
                        detected = true;

                        break;
                    }
                }
            }

            if (detected == false)
            {
                unique.push(array[i]);
            }
        }

        // var unique = array.filter((v, i, a) => a.indexOf(v) === i); 

        ans.innerHTML = "The unique items in the array are: " + unique;
    }

    export function array3() {
        var array = [];
        var x = document.getElementById('AR31').value;
        var y = document.getElementById('AR32').value;
        var z = document.getElementById('AR33').value;
        
        array.push(x);
        array.push(y);
        array.push(z);

        var highest = Math.max.apply(null, array);
        var lowest = Math.min.apply(null, array);

        var ans = document.getElementById('AR3')

        ans.innerHTML = "The highest number in the array is " + highest + " and the lowest number is " + lowest;
    }

    export function array4() {
        var array = [];
        var x = document.getElementById('AR41').value;
        var y = document.getElementById('AR42').value;
        var z = document.getElementById('AR43').value;
        var w = document.getElementById('AR44').value;
        var v = document.getElementById('AR45').value;
        
        array.push(x);
        array.push(y);
        array.push(z);
        array.push(w);
        array.push(v);

        var ans = document.getElementById('AR4')

        ans.innerHTML = "Elements of array in sorted ascending order: <br>" + array.sort();
    }

    export function string1() {
        var str= document.getElementById("STR11").value;
        str = str.replace(/(^\s*)|(\s*$)/gi,"");
        str = str.replace(/[ ]{2,}/gi," ");
        str = str.replace(/\n /,"\n");

        var ans = document.getElementById('STR1')

        ans.innerHTML = str.split(' ').length;
    }

    export function string2() {
        var str = document.getElementById('STR21').value;
        var ans = document.getElementById('STR2');
        var letterCnt = 0;
        var digitCnt = 0;
        var specialCnt = 0;
        var specialChars = "!@#$^&%*()+=-[]\/{}|:<>?,."
        var alphabet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
        var digits = "0123456789";

        var letter = alphabet.split("");
        for (var i = 0; i < str.length; i++) {
            if (letter.indexOf(str[i]) > -1) {
                letterCnt = letterCnt + 1;
            }
        }

        var digit = digits.split("");
        for (var i = 0; i < str.length; i++) {
            if (digit.indexOf(str[i]) > -1) {
                digitCnt = digitCnt + 1;
            }
        }

        var special = specialChars.split("");
        for (var i = 0; i < str.length; i++) {
            if (special.indexOf(str[i]) > -1) {
                specialCnt = specialCnt + 1;
            }
        }

        ans.innerHTML = "Alphabets: " + letterCnt + " Digits: " + digitCnt + " Special characters: " + specialCnt;
    }

    export function string3() {
        var str = document.getElementById('STR31').value;
        var ans = document.getElementById('STR3');
        var array = [];

        for (var i = 0; i < str.length; i++) {
            array.push(str.charAt(i));
        }

        ans.innerHTML = "The ascending string array: " + array.sort();
    }

    export function string4() {
        var str = document.getElementById('STR41').value;
        var subStr = document.getElementById('STR42').value;

        var ans = document.getElementById('STR4');
    
        var n = 0,
            pos = 0,
            step = subStr.length;
    
        while (true) {
            pos = str.indexOf(subStr, pos);
            if (pos >= 0) {
                ++n;
                pos += step;
            } else break;
        }

        ans.innerHTML = "The amount of times your substring appears in your string is " + n + " times";
    }