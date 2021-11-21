function attachEvents() {

    const loadPostBtn = document.querySelector('#btnLoadPosts');
    const viewPostBtn = document.querySelector('#btnViewPost');

    loadPostBtn.addEventListener('click', onLoadPostClick);
    viewPostBtn.addEventListener('click', onViewPostClick);

    async function onLoadPostClick() {
        const url = `http://localhost:3030/jsonstore/blog/posts`;

        const response = await fetch(url);
        const posts = await response.json();

        let selectPostsEl = document.querySelector('#posts');

        Object.values(posts).forEach(k => {
            let options = e('option', { value: `${k.id}` }, `${k.title}`)
            selectPostsEl.appendChild(options);
        });
    }

    async function onViewPostClick() {

        const postId = document.getElementById('posts').value;
        const urlPosts = `http://localhost:3030/jsonstore/blog/posts/${postId}`;
        const urlComments = 'http://localhost:3030/jsonstore/blog/comments';

        const [postResponse, commentsResponse] = await Promise
            .all([fetch(urlPosts), fetch(urlComments)]);

        const postData = await postResponse.json();
        const commentsData = await commentsResponse.json();

        const postTitle = document.getElementById('post-title');
        postTitle.textContent = postData.body;
        const ulComments = document.getElementById('post-comments');

        const comments = Object.values(commentsData).filter((p) => p.postId == postId);

        comments.map(createComments).forEach(c => ulComments.appendChild(c));
    }
}

function createComments(comment) {
    const li = document.createElement('li');
    li.textContent = comment.text;
    li.id = comment.id;

    return li;
}

attachEvents();

//create DOM elements: 
function e(type, attributes, ...content) {
    const result = document.createElement(type);

    for (let [attr, value] of Object.entries(attributes || {})) {
        if (attr.substring(0, 2) == 'on') {
            result.addEventListener(attr.substring(2).toLocaleLowerCase(), value);
        } else {
            result[attr] = value;
        }
    }

    content = content.reduce((a, c) => a.concat(Array.isArray(c) ? c : [c]), []);

    content.forEach(e => {
        if (typeof e == 'string' || typeof e == 'number') {
            const node = document.createTextNode(e);
            result.appendChild(node);
        } else {
            result.appendChild(e);
        }
    });

    return result;
}