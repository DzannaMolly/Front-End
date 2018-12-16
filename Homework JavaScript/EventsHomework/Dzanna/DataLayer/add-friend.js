function AddFriend() {
    this.sentRequest = function (sender, request) {
        // console.log(sender.name + " sent request to " + request.name);
        var random = getRandom(1, 5);
        request.confirmRequest(random, request, sender);

    }

    this.confirmRequest = function (random, request, sender) {
        if (random === 1) {
            // console.log(this.name + " delete the friend request");

        } else {
            request.friendsList.push(sender);
            sender.friendsList.push(request);
            // console.log(this.name + " accept the friend request");
        }
    }

}

