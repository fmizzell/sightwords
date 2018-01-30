window.onload = function() {

    let listBtns = document.getElementsByClassName('list-btn');
    for (let i = 0; i < listBtns.length; i++) {
        let listBtn = listBtns.item(i);
        listBtn.onclick = function() {
            document.getElementById("list-btns").style.visibility = "hidden";

            let id = this.id;
            let listId = id.replace("-btn", "");
            let list = document.getElementById(listId);

            let words = list.getElementsByClassName("word");

            for (let j = 0; j < words.length; j++) {
                let word = words.item(j);
                word.onclick = function() {
                    this.style.visibility = "hidden";

                    let list = this.parentElement;
                    let words = list.getElementsByClassName("word");
                    console.log(words);
                    let word = pickWord(words);
                    word.style.visibility = "visible";
                }
            }

            let word = pickWord(words);
            word.style.visibility = "visible";
        }
    }
}

function pickWord(words) {
    let max = words.length - 1;
    console.log(max);

    let random = Math.random();
    console.log(random);

    let index = Math.round(max * random);
    console.log(index);

    return words.item(index);
}