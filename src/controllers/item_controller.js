module.exports = {
    // add: (req, res) => {
    //     const db = req.app.get('db');
    //     const { title } = req.body;

    //     db.add_item([ title ])
    //       .then( item => res.status(200).send( item ) )
    //       .catch( () => res.status(500).send() );
    // },

    // getOne: (req, res) => {
    //     const db = req.app.get('db');
    //     const { params } = req;

    //     db.get_item([ params.itemId ])
    //       .then( item => res.status(200).send( item ) )
    //       .catch( () => res.status(500).send('Unable to retrieve') );
    // },

    getAll: (req, res) => {
        const db = req.app.get('db');
        console.log(db);
        
        db.get_list()
          .then( items => { res.status(200).send( items ) })
          .catch( (err) => console.log(err) );
    }

//     editTitle: (req, res) => {
//         const db = req.app.get('db');
//         const { params } = req;
//         const { title } = req.body;
        
//         db.edit_item_title([ params.itemID, title ])
//           .then( () => res.status(200).send() )
//           .catch( () => res.status(500).send() );
//     }, 

//     delete: (req, res) => {
//         const db = req.app.get('db');
//         const { params } = req;

//         db.remove_item([ params.itemID ])
//           .then( () => res.status(200).send() )
//           .catch( () => res.status(500).send() );
//     }
};