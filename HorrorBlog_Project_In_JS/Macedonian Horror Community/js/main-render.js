function PageRenderer() {
    this.album = [];
    this.generateAlbum = function () {
        for (var i = 0; i < 5; i++) {
            this.album.push(new Picture("Image " + i));
        }
    }
    this.generateAlbum();
    this.renderAll = function () {
        var mainContainer = document.getElementById('main-container');;
        mainContainer.style.display = "flex";
        mainContainer.appendChild(this.renderRight());
    }

    var pageThis = this;
    this.removeImage = function () {
        var id = this.getAttribute("data-image-id");
        pageThis.album.splice(+id, 1);
        pageThis.refreshImages();
    }

    this.refreshImages = function () {
        var albumContainer = document.getElementById("albumContainer");
        albumContainer.innerHTML = "";
        for (var i = 0; i < this.album.length; i++) {
            var albumImageDiv = document.createElement("div");
            var albumImage = document.createElement("img");
            albumImage.setAttribute("data-toggle", "modal");
            albumImage.setAttribute("data-target", "#myModalCarousel");
            albumImage.src = this.album[i].link;
            albumImage.style.width = "100px";
            albumImage.style.height = "150px";
            albumImage.style.margin = "10px";

            albumImageDiv.style.display = "inline-block";
            albumImageDiv.style.position = "relative";
            albumImageDiv.appendChild(albumImage);

            var albumImageClose = document.createElement("div");
            albumImageClose.setAttribute("data-image-id", i);
            albumImageClose.style.width = "15px";
            albumImageClose.style.height = "15px";
            albumImageClose.style.borderRadius = "50%";
            albumImageClose.style.background = "red";
            albumImageClose.style.color = "white";
            albumImageClose.style.position = "absolute";
            albumImageClose.style.top = "3px";
            albumImageClose.style.right = "3px";
            albumImageClose.style.fontSize = "11px";
            albumImageClose.style.lineHeight = "14px";
            albumImageClose.style.textAlign = "center";
            albumImageClose.style.cursor = "pointer";
            albumImageClose.innerText = "x";

            albumImageClose.onclick = this.removeImage;

            albumImageDiv.appendChild(albumImageClose);

            albumContainer.appendChild(albumImageDiv);
        }
    }

    this.renderRight = function () {
        var rightContainer = document.createElement("div");
        rightContainer.style.width = "65%";
        rightContainer.style.display = "flex";
        rightContainer.style.flexDirection = "column";
        var albumContainer = document.createElement("div");
        albumContainer.setAttribute("id", "albumContainer");

        for (var i = 0; i < this.album.length; i++) {
            var albumImageDiv = document.createElement("div");
            var albumImage = document.createElement("img");
            albumImage.setAttribute("data-toggle", "modal");
            albumImage.setAttribute("data-target", "#myModalCarousel");
            albumImage.src = this.album[i].link;
            albumImage.style.width = "100px";
            albumImage.style.height = "150px";
            albumImage.style.margin = "10px";

            albumImageDiv.style.display = "inline-block";
            albumImageDiv.style.position = "relative";
            albumImageDiv.appendChild(albumImage);

            var albumImageClose = document.createElement("div");
            albumImageClose.setAttribute("data-image-id", i);
            albumImageClose.style.width = "15px";
            albumImageClose.style.height = "15px";
            albumImageClose.style.borderRadius = "50%";
            albumImageClose.style.background = "red";
            albumImageClose.style.color = "white";
            albumImageClose.style.position = "absolute";
            albumImageClose.style.top = "3px";
            albumImageClose.style.right = "3px";
            albumImageClose.style.fontSize = "11px";
            albumImageClose.style.lineHeight = "14px";
            albumImageClose.style.textAlign = "center";
            albumImageClose.style.cursor = "pointer";
            albumImageClose.innerText = "x";

            albumImageClose.onclick = this.removeImage;

            albumImageDiv.appendChild(albumImageClose);

            albumContainer.appendChild(albumImageDiv);
        }
        
        rightContainer.appendChild(albumContainer);
        return rightContainer;
    
        


    
        // $(<img>).attr("src", $("#source).val()).attr("alt", $("#alt-text).val())
    }

    // var slider = document.getElementsByClassName("slider")[0];
    // slider.insertBefore(img,document.getElementsByClassName("prev")[0]);

    // function getUrl() {
    //     var url = ('img');
        
    //     if (url) { // Do string and URL validation here and also for image type
    //         var img = document.createElement("img");
    //         img.src = url;
        
    //         var slider = document.getElementsByClassName("slider")[0];
    //           slider.insertBefore(img,document.getElementsByClassName("prev")[0]);
    //     } else {
    //         return getUrl();
    //     }//`.slider image.src = getUrl();`
    //     }
    //neam add image button i update :(

}




