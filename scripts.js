// the wish list object that manipulates data from the DOM
var wishList = {
  // the array that holds the list items
  listItems: [],
  // console logs the entire list array
  displayListItems: function() {
    console.log('Wish List:');
    console.log(this.listItems);
  },
  // adds a new item to the list array
  addListItems: function(listItemText) {
    this.listItems.push({
      listItemText: listItemText,
      completed: false
    });
    this.displayListItems();
  },
  // updates a single item from the list array
  updateListItems: function(position, listItemText) {
    this.listItems[position].listItemText = listItemText;
    this.displayListItems();
  },
  // deletes a single item from the list array
  deleteListItems: function(position) {
    this.listItems.splice(position, 1);
    this.displayListItems();
  },
  // toggles the completion status of a single list item in the list array
  toggleCompleted: function(position) {
    if (this.listItems[position].completed === false) {
      this.listItems[position].completed = true;
    } else {
      this.listItems[position].completed = false;
    }
    this.displayListItems();
  }
};
