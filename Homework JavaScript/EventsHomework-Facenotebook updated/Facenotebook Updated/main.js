var userDataClone;

function startupWebpage() {
    var userData = new FaceNotebook();
    var page = new PageRenderer(userData.users[0]);
    userDataClone = userData;
    page.renderAll();
}

startupWebpage();