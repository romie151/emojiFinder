document.addEventListener('DOMContentLoaded', (event) => {
    var search = document.getElementById('search');
    var emojiBox = document.getElementById('bigDiv')

    fetch('https://s3.amazonaws.com/c4q/emojis.json')
        .then((response) => {
            return response.json();
        })
        .then((emojiObj) => {
            //Creating the div element with attributes and html elementst that will go in it. 
            // Then appending it to the container that is already created. 
            var div = document.createElement('div');
            div.setAttribute('id', 'emoji');
            
            for (key in emojiObj) {
                div.innerHTML = `<p>${key}</p>` + `<img src ="${emojiObj[key]}"/>` 
                emojiBox.appendChild(div)
            }
        })
        // search.addEventListener('keyup', (event) => {
        //     var emojiName = document.getElementById('emoji').innerText;
        //     for (var i = 0; i > emojiName.length; i++) {
        //         if (event === emojiName) {

        //     }
        //     }
        // })
})

