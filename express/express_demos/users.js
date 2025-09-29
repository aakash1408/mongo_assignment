let express = require("express");
let router = express.Router();

let uuid = require("uuid");
let users = require("./Usersdata");  // this is also the user-defined module

router.get("/", (req, res) => {   // fetching all the records
  res.json(users);
});


router.get("/:id", (req, res) => {     // fetch the particular record based on ID
  const found = users.some(user => user.id === parseInt(req.params.id));
  if (found) {
    res.json(users.filter(user => user.id === parseInt(req.params.id)));
  } else {
    res.sendStatus(400);
  }
});

router.post("/", (req, res) => {    // to add a new record
  const newUser = {
    id: uuid.v4(),
    name: req.body.name,         // this will pick the parameters from the request body of the postman tool
    email: req.body.email        // this will pick the parameters from the request body of the postman tool
  };

  if (!newUser.name || !newUser.email) {
    return res.sendStatus(400);
  }

  users.push(newUser);
  res.json(users);
});

// 

 

//Update User
router.put("/:id", (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id));

  if (found) {
    const updateUser = req.body;
    users.forEach(user => {
      if (user.id === parseInt(req.params.id)) {
        user.name =  updateUser.name ? updateUser.name : user.name;
        user.email = updateUser.email ? updateUser.email : user.email;
        res.json({ msg: "User updated", user });
      }
    });
  } else {
    res.sendStatus(400);
  }
});

 

//Delete User
router.delete("/:id", (req, res) => {
  const found = users.some(user => user.id === parseInt(req.params.id));

  if (found) {
    users = users.filter(user => user.id !== parseInt(req.params.id))
    res.json({
      msg: "User deleted",
      users
    });
  } else {
    res.sendStatus(400);
  }
});

module.exports = router;