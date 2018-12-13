function SocialNetwork(users, events){
    this.users = users;
    this.events = events;
    this.listUsersAndEvents = function(){
        console.log(users, events);
    }
}