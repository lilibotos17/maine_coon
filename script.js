const kepek = document.querySelector("#kepek");
const targetImage = document.querySelector("#targetImage");

console.log(kepek);
const kep = ["kep1.jpg", "kep2.jfif", "kep3.jfif" ,"kep5.jpg", "kep6.jpg"];

for (const kep of kep) {
  const img = document.createElement("img");
  img.src = kep;
  img.width = "200";
  console.log("kep:" + img.src);
  container.appendChild(img);

  img.addEventListener("click", function () {
    console.log(this.src);
    targetImage.src = this.src;
  });
}