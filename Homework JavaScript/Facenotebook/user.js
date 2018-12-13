function User(userFriendList){

    url = "http://philipwrightphotography.co.uk/wp-content/uploads/2016/02/1-1800x1013.jpg";
    altText = "el gato libre, is a wonderful placeholder cat";
    
    this.profilePicture = new ProfilePicture(url, altText);
    this.album = [];
    this.userFriendList = userFriendList;
    this.generateAlbum = function () {
        for(var i = 0; i < 10; i++){
            this.album[i] = new Picture(url, altText);
        }
    }
    this.generateAlbum();

    this.biography = new shortBiography();
    this.stories = new Stories();
}
