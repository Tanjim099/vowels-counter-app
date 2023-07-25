let count = document.getElementsByClassName("vowelCount");
// const textarea = document.getElementById("textarea").value;

function countVowel(str) {
    str = str.toLowerCase();
    let vowelArr = ["a", "e", "i", "o", "u"];
    counter = 0;
    console.log(str)
    for (let letter of str) {
        if (vowelArr.includes(letter)) {
            counter++;
        }
    }
    count[0].innerHTML = counter;
}