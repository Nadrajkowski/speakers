var id = 0;

var store = {
    items: [],

    addItem: function (body) {
        this.items.push({
            context: body.context,
            from: body.from,
            id: id,
            poster: body.poster,
            text: body.text,
            title: body.title,
            to: body.to
        });
        id++;
        return id - 1;
    },

    getItems: function(){
        return this.items;
    },

    getItem: function (id) {
        for(var i=0; i <=this.items.length; i++){
            if (this.items[i].id == id) return this.items[i];
        }
    }
};

module.exports = store;