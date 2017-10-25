module.exports = {
    add: (req, res) => {
        const { title } = req.body;
        req.app.get('db').add_item( [title] ).then( items => {
            res.status(200).send()
        }).catch( (err) => console.log(err) );
    },

    getOne: (req, res) => {

    },

    getAll: (req, res) => {
        req.app.get('db').get_list().then( items => {
            res.status(200).send(items);
        }).catch( (err) => console.log(err) );
    },

    editTitle: (req, res) => {

    },

    delete: (req, res) => {

    }
};