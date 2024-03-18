const userId = "0cz";
fetch(`https://api.github.com/users/${encodeURIComponent(userId)}`)
    .then(response => {
        console.log(response.status); // => 200
        return response.json().then(userInfo => {
            // JSONパースされたオブジェクトが渡される
            console.log(userInfo); // => {...}
        });
    });