var id = 0;

var store = {
    items: [],

    addItem: function(name){
        this.items.push({id: id, name:name});
        id++;
    },

    getItems: function(){
        return this.items;
    }
}

module.exports = store;