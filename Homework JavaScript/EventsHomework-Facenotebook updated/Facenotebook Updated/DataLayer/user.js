function User(name) {
    this.name = name;
    this.profilePicture = new ProfilePicture();
    this.album = [];
    this.biography = new Biography();
    this.friendsList = [];
    this.stories = [];

    this.generateStories = function () {
        for (var j = 0; j < 5; j++) {
            this.stories.push(new Story("Story " + j));
        }

        this.stories.sort(function (a, b) {
            a = new Date(a.date).getTime();
            b = new Date(b.date).getTime();
            return a > b ? -1 : a < b ? 1 : 0;
        });
    }

    this.generateAlbum = function () {
        for (var i = 0; i < 14; i++) {
            this.album.push(new Picture("Image " + i));
        }
    }

    this.generateStories();
    this.generateAlbum();
}

User.prototype = new AddFriend();