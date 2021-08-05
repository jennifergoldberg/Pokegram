class Avatar {
  name
  image
  constructor(nameProp, imageProp) {
    this.name = nameProp,
    this.image = imageProp
  }
};

const abra = new Avatar("abra", "../assets/_abra.png");


const avatars = {
  abra,
}

module.exports = avatars;