module.exports = {
    getUrlId: function (inputString, Post) {
        return new Promise(function (resolve, reject) {
            var newId = inputString.split(' ').join('_');
            Post.count({title: inputString}, function (err, count) {
                if (err) return reject(err);
                if (count > 0) newId = newId + '_' + count;
                return resolve(newId);
            });
        });
    }
};