function FaceNotebook() {
    this.users = [];
    this.events = [];

    this.generateEvents = function () {
        for (var i = 0; i < 5; i++) {
            this.events.push(new Event("Event " + i));
        }
    }
    this.generateUsers = function () {
        for (var i = 0; i < 50; i++) {
            var account = getRandom(1, 2);
            switch (account) {
                case 1:
                    this.users.push(new User("Sir " + getRandom(1000, 9000)));
                    break;
                case 2:
                    this.users.push(new User("Madam " + getRandom(9001, 20000)));
                    break;
                default:
                    break;
            }
        }
    }
    this.joinEvent = function () {
        for (var i = 0; i < this.users.length; i++) {
            var event = getRandom(0, 4);
            this.events[event].userJoined.push(this.users[i]);
        }
    }

    this.sentFrendship = function () {
            for (var i = 0; i < this.users.length; i++) {
                this.users[i].sentRequest(this.users[i], this.users[getRandom(0, this.users.length - 1)]);
        }
    }

    this.generateEvents();
    this.generateUsers();
    this.joinEvent();
    this.sentFrendship();
    console.log(this.users, this.events);
}
