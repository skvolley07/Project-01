

// This code is for navigation bar

const navE1 = document.querySelector(".menu");
const hamburgurE1 = document.querySelector(".hamburgur");

hamburgurE1.addEventListener("click", () => {
  navE1.classList.toggle("menu--open");
  hamburgurE1.classList.toggle("hamburgur--open");
});
navE1.addEventListener("click", () => {
  navE1.classList.remove("menu--open");
  hamburgurE1.classList.remove("hamburgur--open");
});








// This code is for delelting a complete div
function deleteDiv(divId) {
  const divToDelete = document.getElementById(divId);
  if (divToDelete) {
    divToDelete.remove();
  }
}







// This code is for scrolling within webpage using buttons
function scrollToSection(sectionId) {
  const section = document.getElementById(sectionId);
  section.scrollIntoView({ behavior: "smooth" });
}
function openWhatsApp(divId) {
  const source = document.getElementById(divId);
  var URL = source.src;
  var phoneNumber = "+918668851601";
  var message = URL + "\nI came across your artwork and absolutely love it! 🎨 Are you currently selling? If so, could you share more details about the piece and the purchase process? \nThanks!";
  var whatsappUrl =
    "https://wa.me/" + phoneNumber + "?text=" + encodeURIComponent(message);
  window.location.href = whatsappUrl;
}




// this code is for adding and deleting an image from a gallery
const fileInput = document.getElementById("imageInput");
const selectImage = document.querySelector(".btn-1");
selectImage.addEventListener("click", function () {
  imageInput.click();
});
function addImage() {
  const files = fileInput.files;
  if (files.length > 0) {
    const gallery = document.getElementById("gallery");

    for (const file of files) {
      const reader = new FileReader();

      reader.onload = function (e) {
        const imageUrl = e.target.result;

        const imageContainer = document.createElement("div");
        imageContainer.className = "image-container";

        const image = document.createElement("img");
        image.src = imageUrl;
        

        const deleteButton = document.createElement("button");
        deleteButton.className = "delete-button";
        deleteButton.textContent = "Delete";
        deleteButton.onclick = function () {
          gallery.removeChild(imageContainer);
        };
        const buyAnItem = document.createElement("button");
        buyAnItem.className = "bttn";
        buyAnItem.textContent = "Buy an Item";
        buyAnItem.setAttribute('onclick', 'openWhatsApp()');

        imageContainer.appendChild(image);
        imageContainer.appendChild(deleteButton);
        imageContainer.appendChild(buyAnItem);

        gallery.appendChild(imageContainer);
      };

      reader.readAsDataURL(file);
    }

    // Clear the file input
    fileInput.value = "";
  }
}
