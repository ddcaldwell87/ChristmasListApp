// the wish list object that manipulates data from the DOM
var wishList = {
  // the array that holds the list items
  listItems: [],
  // console logs the entire list array
  displayListItems: function() {
    console.log('Wish List:');
    for (var i = 0; i < this.listItems.length; i++) {
        console.log(this.listItems[i].listItemText);
    }
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

// takes input from the DOM and calls methods from wishList to manipulate that input
var handlers = {
  displayListItems: function() {
    wishList.displayListItems();
  },
  addListItems: function() {
    var addListItemsInputText = document.getElementById('addListItemsInputText');
    wishList.addListItems(addListItemsInputText.value);
    addListItemsInputText.value = '';
  },
  updateListItems: function() {
    var updateListItemsInputPosition = document.getElementById('updateListItemsInputPosition');
    var updateListItemsInputText = document.getElementById('updateListItemsInputText');
    wishList.updateListItems(updateListItemsInputPosition.valueAsNumber, updateListItemsInputText.value);
    updateListItemsInputPosition.value = '';
    updateListItemsInputText = '';
  },
  deleteListItems: function() {
    var deleteListItemsInputPosition = document.getElementById('deleteListItemsInputPosition');
    wishList.deleteListItems(deleteListItemsInputPosition.valueAsNumber);
    deleteListItemsInputPosition.value = '';
  },
  toggleCompleted: function() {
    var toggleCompletedInputPosition = document.getElementById('toggleCompletedInputPosition');
    wishList.toggleCompleted(toggleCompletedInputPosition.valueAsNumber);
    toggleCompletedInputPosition.value = '';
  }
};
