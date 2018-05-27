module.exports = {
  getAll: (req, res) => {
    const db = req.app.get("db");
    console.log(db);

    db
      .get_list()
      .then(items => {
        res.status(200).send(items);
      })
      .catch(err => console.log(err));
  }
};
