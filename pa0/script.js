// JAVASCRIPT CODE FOR CAESAR CIPHER CONVERTER
let encriptBox = document.getElementsByClassName("encription")[0];
let decriptBox = document.getElementsByClassName("decription")[0];

// Key used for encryption
let key = 15;

encriptBox.oninput = enfun;
decriptBox.oninput = defun;

// FOR RENDERING OF PLAINTEXT BLOCK
function enfun(e) {
    let plainText = e.target.value;
    //console.log(plainText);
    let cipherText = encript(plainText, key);
    decriptBox.value = cipherText;
}

// FOR RENDERING OF CIPHERTEXT BLOCK
function defun(e) {
    let cipherText = e.target.value;
    //console.log(cipherText);
    let plainText = decript(cipherText, key);
    encriptBox.value = plainText;
}


// ENCRYPTION FUNCTION
function encript(str, x) {
    let Ans = "";
    for (i = 0; i < str.length; i++) {
        if (str[i] <= 'z' && str[i] >= 'a') {

            let val = str.charCodeAt(i);
            val -= "a".charCodeAt(0);
            val += x;
            val %= 26;
            val += 65;

            let ans = String.fromCharCode(val)
            Ans += ans;

        }
        else if (str[i] <= 'Z' && str[i] >= 'A') {

            let val = str.charCodeAt(i);
            val -= "A".charCodeAt(0);
            val += x;
            val %= 26;
            val += 97;

            let ans = String.fromCharCode(val)
            Ans += ans;

        }
        else {
            console.log(' ');
            Ans += ' ';
        }
    }
    return (Ans);
}

// DECRYPTION FUNCTION
function decript(str, x) {
    x = 26 - x;
    let ss = "";
    for (i = 0; i < str.length; i++) {
        if (str[i] <= 'z' && str[i] >= 'a') {

            let val = str.charCodeAt(i);
            val -= "a".charCodeAt(0);
            val += x;
            val %= 26;
            val += 65;

            let ans = String.fromCharCode(val)
            ss += ans;
        }
        else if (str[i] <= 'Z' && str[i] >= 'A') {

            let val = str.charCodeAt(i);
            val -= "A".charCodeAt(0);
            val += x;
            val %= 26;
            val += 97;

            let ans = String.fromCharCode(val)
            ss += ans;
        }
        else {
            ss += " ";
        }
    }
    return (ss);
}