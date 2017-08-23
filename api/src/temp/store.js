var store = {
    items: [],

    addItem: function(item){
        this.items.push(item);
    },

    getItems: function(){
        return this.items;
    }
}

module.exports = store;