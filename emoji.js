document.addEventListener('DOMContentLoaded', function (e) {
    var search = document.getElementById('search');
    var emojiBox = document.getElementById('emoji')

    fetch('https://s3.amazonaws.com/c4q/emojis.json', { mode: 'no-cors' })
        .then(function (response) {
            return response.text();
        })
        .then (function (text) {
            console.log('Request successful', text);
        })
        .catch (function (error) {
            console.log('Request failed', error)
        });
});









    // fetch('https://s3.amazonaws.com/c4q/emojis.json')
    //     .then((response) => {
    //         return response.json();
    //         console.log(response.json)
    //     })
    //     .then((emojiObj) => {
    //Creating the div element with attributes and html elementst that will go in it. 
    // Then appending it to the container that is already created. 
    // var div = document.createElement('div');
    // div.setAttribute('id', 'emoji');

    // for (key in emojiObj) {
    //     div.innerHTML = `<p>${key}</p>` + `<img src ="${emojiObj[key]}"/>` 
    //     emojiBox.appendChild(div)
    // }

    // search.addEventListener('keyup', (event) => {
    //     var emojiName = document.getElementById('emoji').innerText;
    //     for (var i = 0; i > emojiName.length; i++) {
    //         if (event === emojiName) {

    //     }
    //     }
    // })

