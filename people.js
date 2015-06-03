module.exports = {
  removeBadPeople: function(arr) {
      return  arr.filter(this.remove)
  },
  remove: function(obj) {
    if (obj.name) {
      return obj;
    }
  },

}
