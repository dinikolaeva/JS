class Story {
    constructor(title, creator) {
        this.title = title;
        this.creator = creator;
        this._comments = [];
        this._likes = [];
    }

    get likes() {
        if (this._likes.length == 0) {
            return `${this.title} has 0 likes`;
        } else if (this._likes.length == 1) {
            return `${this._likes[0]} likes this story!`;
        } else {
            return `${this._likes[0]} and ${this._likes.length - 1} others like this story!`;
        }
    }

    like(username) {
        if (this._likes.includes(username)) {
            throw new Error('You can\'t like the same story twice!');
        } else if (username === this.creator) {
            throw new Error('You can\'t like your own story!');
        } else {
            this._likes.push(username)
            return `${username} liked ${this.title}!`;
        }
    }

    dislike(username) {
        if (!this._likes.includes(username)) {
            throw new Error('You can\'t dislike this story!')
        } else {
            const i = this._likes.indexOf(username);
            this._likes.splice(i, 1);
            return `${username} disliked ${this.title}`;
        }
    }

    comment(username, content, id) {
        if (id == undefined || !this._comments.some(i => i.id == id)) {
            const newComent = {
                id: this._comments.length + 1,
                username,
                content,
                replies: []
            };

            this._comments.push(newComent);

            return `${username} commented on ${this.title}`;
        } else {
            let indexOfComment = this._comments.indexOf(this._comments.find(i => i.id == id));

            if (this._comments[indexOfComment].replies == undefined) {
                this._comments[indexOfComment].replies = [];
            }

            const newReplay = {
                id: `${id}.${this._comments[indexOfComment].replies.length+1}`,
                username,
                content
            }

            this._comments[indexOfComment].replies.push(newReplay);
            return `You replied successfully`;
        }
    }

    toString(sortingType) {
        let result = `Title: ${this.title}\n`;
        result += `Creator: ${this.creator}\n`;
        result += `Likes: ${this._likes.length}\n`;
        result += `Comments:\n`;

        switch (sortingType) {
            case 'asc':
                for (const comment of this._comments) {
                    result += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`;

                    if (comment.replies.length > 0) {
                        for (const reply of comment.replies) {
                            result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                        }
                    }
                }
                break;
            case 'desc':
                let reverseComments = this._comments.reverse();

                for (const comment of reverseComments) {
                    result += `-- ${comment.id}. ${comment.username}: ${comment.content}\n`;

                    if (comment.replies.length > 0) {
                        let reverseReplies = comment.replies.reverse();

                        for (const reply of reverseReplies) {
                            result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                        }
                    }
                }
                break;
            case 'username':

                let sortUsernames = this._comments.sort((a, b) => a.username.localeCompare(b.username));

                for (const user of sortUsernames) {
                    result += `-- ${user.id}. ${user.username}: ${user.content}\n`;

                    if (user.replies.length > 0) {
                        let sortReplies = user.replies.sort((a, b) => a.username.localeCompare(b.username));

                        for (const reply of sortReplies) {
                            result += `--- ${reply.id}. ${reply.username}: ${reply.content}\n`;
                        }
                    }
                }
                break;
        }

        return result = result.trimEnd();
    }
}

let art = new Story("My Story", "Anny");
art.like("John");
console.log(art.likes);
art.dislike("John");
console.log(art.likes);
art.comment("Sammy", "Some Content");
console.log(art.comment("Ammy", "New Content"));
art.comment("Zane", "Reply", 1);
art.comment("Jessy", "Nice :)");
console.log(art.comment("SAmmy", "Reply@", 1));
console.log()
console.log(art.toString('username'));
console.log()
art.like("Zane");
console.log(art.toString('desc'));