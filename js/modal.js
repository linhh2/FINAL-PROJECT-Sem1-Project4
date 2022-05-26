// POPUP SCREEN MANIPULATION
let popup = document.getElementById("pop-up");
function openPopup(){
    popup.classList.add("open-popup");
}
function closePopup(){
    popup.classList.remove("open-popup");
}

//CHANGING THE TITLE + UPLOADING IMAGES 

// Function: Changing the title
const titleUpdating = (data) => {
    titleInput.value = data.title;
    titleInput.placeholder = data.title;
    galleryTitle.innerHTML = data.title;
    title.innerHTML = data.title;
};
const title = document.querySelector(".modal-title");
const titleInput = document.querySelector("#title");
const galleryTitle = document.querySelector(".gallery-title");
const addImageBtn = document.querySelector(".add-image-btn");
const defaultBtn = document.querySelector("#default-btn");


titleUpdating(data);
  
function titleOnChange(event) {
    data.title = event.target.value;
    titleUpdating(data);
}
  
  //Function: Open folder to upload images
function folderOpening() {
    defaultBtn.click();
}
  
  //Function: Add and Delete images
function imagesAdding() {
    const file = this.files[0];
  
    if (file) {
      const reader = new FileReader();
      reader.onload = function () {
        const result = reader.result;
        data.images.push(result);
      };
      reader.readAsDataURL(file);
    }
  }
  
  function deleteImage(index) {
    data.images.splice(index, 1);
  }
  
  titleInput.addEventListener("keyup", titleOnChange);
  addImageBtn.addEventListener("click", folderOpening);
  defaultBtn.addEventListener("change", imagesAdding);