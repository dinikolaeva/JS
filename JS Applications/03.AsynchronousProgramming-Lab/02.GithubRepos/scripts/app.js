function loadRepos() {

    const username = document.getElementById('username').value;

    const url = `https://api.github.com/users/${username}/repos`;

    fetch(url)
        .then(response => {
            if (response.status == 404) {
                throw new Error('User not found');
            }
            return response.json()
        })
        .then(data => {
            const ulElement = document.getElementById('repos');
            ulElement.innerHTML = '';

            data.forEach(r => {
                const aElement = document.createElement('a');
                const liElement = document.createElement('li');

                aElement.setAttribute('href', r.html_url);
                aElement.innerHTML = r.full_name;

                liElement.appendChild(aElement);
                ulElement.appendChild(liElement);
            });
        })
        .catch(error => {
            console.log(error.message);
        });
}