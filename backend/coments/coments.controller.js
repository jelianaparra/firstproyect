const comentsSchema = require("../coments/coments.model");

exports.getComents = async (req, res) => {
  try {
    let coments = await comentsSchema.find();
    res.json({
      done: true,
      coments,
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "The information could not be accessed",
    });
  }
};

exports.addComents = async (req, res) => {
  const body = req.body;
  const id = req.id;
  try {
    const coments = new comentsSchema(req.body);
    await coments.save();
    res.json({
      done: true,
      msg: "Movie updated successfully!",
    });
  } catch (err) {
    console.log("dfghjkl", err);
    return res.status(400).json({
      done: false,
      error: "The username or password is incorrect",
    });
  }
};

exports.uptadeComents = async (req, res) => {
  const { body } = req;
  const { id } = body;
  console.log(id, body);
  try {
    await comentsSchema.findByIdAndUpdate(id, body);
    res.json({
      done: true,
      msg: "Movie updated successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "The username or password is incorrect",
    });
  }
};

exports.deleteComents = async (req, res) => {
  const id = req.body.id;
  try {
    await comentsSchema.findByIdAndDelete(id);
    res.json({
      done: true,
      msg: "Movie delete successfully!",
    });
  } catch (err) {
    return res.status(400).json({
      done: false,
      error: "Movie could not be deleted",
    });
  }
};
