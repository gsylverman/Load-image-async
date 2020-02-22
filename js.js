const image = document.images[0];
const downloadingImage = new Image();
downloadingImage.onload = function() {
  image.src = this.src;
};
downloadingImage.src =
  "https://i.guim.co.uk/img/media/a2c7d4f5348e760f0b43305c1cf7b0c95ab57c4f/0_23_5184_3110/master/5184.jpg?width=1900&quality=85&auto=format&fit=max&s=3afb04b45da8ba4fa407b2556067778c";
