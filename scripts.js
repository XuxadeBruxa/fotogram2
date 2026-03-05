const popupImages = [
    "./img/Lake with Montain.jpg",
    "./img/Citylights.jpg",
    "./img/Wolken.png",
    "./img/Vogel.jpg",
    "./img/Erde.jpg",
    "./img/Mountain and Lake.jpg",
    "./img/Duck.jpg",
    "./img/Like a Dream.jpg",
    "./img/Bird on a Stone.jpg",
    "./img/Baby Gepard.jpg",
    "./img/Mountain.jpg",
    "./img/Winter.jpg",
];

let currentIndex = 0;

// #region open dialog
function openDialog(index) {
    const dialogRef = document.getElementById("openPicture");
    dialogRef.showModal();
    currentIndex = index;
    render();
}
// #endregion

// #region close dialog
function closeDialog() {
    const dialogRef = document.getElementById("openPicture");
    dialogRef.close();
}
// #endregion

// #region change picturename, picture & Counter
function render() {
    const pictureRef = document.getElementById("changePicture");

    pictureRef.src = "";

    pictureRef.onload = () => {
        setData();
        setCounter();
    };

    pictureRef.src = popupImages[currentIndex];
}
// #endregion

// #region Show picture
function setImage() {
    const pictureRef = document.getElementById("changePicture");
    pictureRef.src = popupImages[currentIndex];
}

function setData(){
    const dataRef = document.getElementById("changeData");
    const dataName = popupImages[currentIndex].replace("./img/","");
    dataRef.innerText = dataName;
}
// #endregion

// #region Counterfunction
function setCounter() {
    const counterRef = document.getElementById("continueCounter");
    counterRef.innerText = currentIndex + 1 + " / " + popupImages.length;
}
// #endregion

// #region next and prev Button
function nextImage() {
    currentIndex++;
    if (currentIndex >= popupImages.length) {
        currentIndex = 0;
    }
    render();
}

function prevImage() {
    currentIndex--;
    if(currentIndex < 0) {
        currentIndex = popupImages.length -1;
    }

    render();
}
// #endregion

// #region slide thru dialog with arrow and close with escape
document.addEventListener("keydown", (event) => {
    const dialogRef = document.getElementById("openPicture");

    if (dialogRef && dialogRef.open) {
        if (event.key === "ArrowRight") {
            nextImage();
        }
        if (event.key === "ArrowLeft") {
            prevImage();
        }
        if (event.key === "Escape") {
            closeDialog();
        }
    }

    if (event.key === "Enter") {
        const activeElem = document.activeElement;
        if (
            activeElem &&
            activeElem.tagName === "IMG" &&
            activeElem.hasAttribute("onclick")
        ) {
            event.preventDefault();
            activeElem.click();
        }
    }
});
// #endregion