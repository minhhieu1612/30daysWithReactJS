module.exports = {
  findIndex: (id, arr) => {
    let result = -1;
    if (arr) arr.forEach((task, index) => {
      if (task.id === id) {
        result = index;
      }
    });
    return result;
  },

  generateID: () => {
    let hash = '';
    for (let i = 0; i < 5; i++) {
      hash += Math.floor((1 + Math.random()) * 0x1000000).toString(16);
      if (i < 4) {
        hash += '-';
      }
    }
    return hash;
  },

  setupLocal: (itemName, itemValue) => {
    localStorage.setItem(itemName, JSON.stringify(itemValue));
  }
}