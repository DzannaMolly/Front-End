function generateUsers() {
    var userList = ["Ana", "Mac", "Suzana", "Lidija", "Trajan"];
    var users = [];
    for (var i = 0; i < 50; i++) {
        users[i] = new User(userList);
    }
    return users;
}

function generateEvents() {
    var events = [];
    var userList = ["Ana", "Mac", "Suzana", "Lidija", "Trajan"];
    events[0] = new SocialEvent("Burger Week", userList, "16/02/2018", "We are eating burgers!");
    events[1] = new SocialEvent("Twiter nagradi", userList, "16/02/2018", "We are eating burgers!");
    events[2] = new SocialEvent("Vostanie", userList, "16/02/2018", "We are eating burgers!");
    events[3] = new SocialEvent("Taksirat", userList, "16/02/2018", "We are eating burgers!");
    events[4] = new SocialEvent("Homework Week", userList, "16/02/2018", "We are eating burgers!");
    return events;
}