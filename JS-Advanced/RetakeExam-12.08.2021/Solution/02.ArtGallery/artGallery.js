class ArtGallery {
    constructor(creator) {
        this.creator = creator;
        this.possibleArticles = {
            "picture": 200,
            "photo": 50,
            "item": 250
        };
        this.listOfArticles = [];
        this.guests = [];
    }

    addArticle(articleModel, articleName, quantity) {
        articleModel = articleModel.toLowerCase();
        let isPossible = false;

        for (const article in this.possibleArticles) {
            if (article == articleModel) {
                isPossible = true;
            }
        }

        if (isPossible == false) {
            throw new Error('This article model is not included in this gallery!');
        }

        const searchedArticle = this.listOfArticles.find(a => a.articleName == articleName &&
            a.articleModel == articleModel);

        if (searchedArticle) {
            searchedArticle.quantity += quantity;
        } else {
            const newArticle = {
                articleModel,
                articleName,
                quantity
            }

            this.listOfArticles.push(newArticle);
        }
        return `Successfully added article ${articleName} with a new quantity- ${quantity}.`;
    }

    inviteGuest(guestName, personality) {

        const searchedGuest = this.guests.find(g => g.guestName == guestName);

        let points = 50;
        if (personality == 'Vip') {
            points = 500;
        } else if (personality == 'Middle') {
            points = 250;
        }

        if (searchedGuest) {
            throw new Error(`${guestName} has already been invited.`);
        } else {
            const newGuest = {
                guestName,
                points,
                purchaseArticle: 0
            };

            this.guests.push(newGuest);
            return `You have successfully invited ${guestName}!`;
        }
    }

    buyArticle(articleModel, articleName, guestName) {
        articleModel = articleModel.toLowerCase();

        const searchedArticle = this.listOfArticles.find(a => a.articleName == articleName &&
            a.articleModel == articleModel);

        if (!searchedArticle) {
            throw new Error('This article is not found.');
        }

        if (searchedArticle.quantity == 0) {
            return `The ${articleName} is not available.`;
        }

        const guest = this.guests.find(g => g.guestName == guestName);

        if (!guest) {
            return 'This guest is not invited.';
        }

        if (guest.points < this.possibleArticles[articleModel]) {
            return 'You need to more points to purchase the article.';
        }

        guest.purchaseArticle += 1;
        guest.points -= this.possibleArticles[articleModel];
        guest.quantity -= 1;

        return `${guestName} successfully purchased the article worth ${this.possibleArticles[articleModel]} points.`;
    }

    showGalleryInfo(criteria) {

        let galleryInfo = '';

        if (criteria == 'article') {

            galleryInfo += 'Articles information:\n';

            for (const article of this.listOfArticles) {
                galleryInfo += `${article.articleModel} - ${article.articleName} - ${article.quantity}\n`;
            }
        } else if (criteria == 'guest') {
            galleryInfo += 'Guests information:\n';

            for (const guest of this.guests) {
                galleryInfo += `${guest.guestName} - ${guest.purchaseArticle}`;
            }
        }

        return galleryInfo;
    }
}

let art = new ArtGallery("Curtis Mayfield");

console.log(art.addArticle('picture', 'Mona Liza', 3));
console.log(art.addArticle('Item', 'Ancient vase', 2));
console.log(art.addArticle('picture', 'Mona Liza', 1));

console.log(art.inviteGuest('John', 'Vip'));
console.log(art.inviteGuest('Peter', 'Middle'));

console.log(art.buyArticle('picture', 'Mona Liza', 'John'));
console.log(art.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(art.showGalleryInfo('article'));

/*
const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.addArticle('picture', 'Mona Liza', 3));
console.log(artGallery.addArticle('Item', 'Ancient vase', 2));
console.log(artGallery.addArticle('PICTURE', 'Mona Liza', 1));

const artGallery = new ArtGallery('Curtis Mayfield');
console.log(artGallery.inviteGuest('John', 'Vip'));
console.log(artGallery.inviteGuest('Peter', 'Middle'));
console.log(artGallery.inviteGuest('John', 'Middle'));

const artGallery = new ArtGallery('Curtis Mayfield');
artGallery.addArticle('picture', 'Mona Liza', 3);
artGallery.addArticle('Item', 'Ancient vase', 2);
artGallery.addArticle('picture', 'Mona Liza', 1);
artGallery.inviteGuest('John', 'Vip');
artGallery.inviteGuest('Peter', 'Middle');
console.log(artGallery.buyArticle('picture', 'Mona Liza', 'John'));
console.log(artGallery.buyArticle('item', 'Ancient vase', 'Peter'));
console.log(artGallery.buyArticle('item', 'Mona Liza', 'John'));
*/