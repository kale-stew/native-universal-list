module.exports = {
    add: (req, res) => {
        const { title } = req.body;
        req.app.get('db').add_item( [title] ).then( items => {
            res.status(200).send()
        }).catch( (err) => console.log(err) );
    },

    getOne: (req, res) => {
        const { id, title } = req.body;
        req.app.get('db').get_item( [id] ).then( item => {
            res.status(200).send( item )
        }).catch( (err) => console.log(err) );
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