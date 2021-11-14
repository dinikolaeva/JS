function loadCommits() {

    const username = document.getElementById('username').value;
    const repo = document.getElementById('repo').value;

    const url = `https://api.github.com/repos/${username}/${repo}/commits`;

    const ulElement = document.getElementById('commits');
    ulElement.innerHTML = '';

    fetch(url)
        .then(response => {
            if (response.status == 404) {
                throw new Error(`<li>Error: ${response.status} (Not Found)</li>`);
            }
            return response.json()
        })
        .then(data => {

            data.forEach(r => {
                const liElement = document.createElement('li');
                liElement.textContent = `${r.commit.author.name}: ${r.commit.message}`;
                ulElement.appendChild(liElement);
            })
        })
        .catch(error => {
            ulElement.innerHTML = error.message;
        })
};