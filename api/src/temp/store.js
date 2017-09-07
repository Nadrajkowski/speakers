var id = 0;

var store = {
    items: [],

    addItem: function(name){
        this.items.push({
            id: id,
            name:name,
            publisher: 'Kasper',
            text: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
            textPreview: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed ...'
        });
        id++;
    },

    getItems: function(){
        return this.items;
    },

    getItem: function (id) {
        for(var i=0; i <=this.items.length; i++){
            if(this.items[i].id == id) return this.items[i];
        }
    }
}

module.exports = store;