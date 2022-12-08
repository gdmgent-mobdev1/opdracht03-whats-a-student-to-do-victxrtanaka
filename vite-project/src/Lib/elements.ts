const Elements = {
  createHeader ({ size = 1, textContent= ''})
  
  {
    const header = document.createElement(`h${(size < 1 || size > 6) ? 1 : size}`);
  },

}

export default Elements;