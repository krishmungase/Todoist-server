const todoModel = require("../models/todo-model")

exports.getTodo = async (req, res) => {
  try {
    const todoList = await todoModel.find({})

    return res.status(200).json({
      message: "get todoList success",
      todoList
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.createTodo = async (req, res) => {
  try {
    const { title, description, status, level } = req.body;
    const newTodo = await todoModel.create({
      title,
      description,
      level,
      status
    })

    return res.status(200).json({
      message: "new Todo created",
      newTodo
    })
  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
}

exports.deleteTodo = async (req, res) => {
  try {
    const { todoId } = req.body;

    // Find the todo by ID
    const todo = await todoModel.findById(todoId);
    console.log("Todo: ", todo);

    if (!todo) {
      return res.status(404).json({
        success: false,
        message: "Todo not found"
      });
    }

    // Attempt to delete the todo
    const deletedTodo = await todoModel.findByIdAndDelete(todoId);

    if (!deletedTodo) {
      return res.status(400).json({
        success: false,
        message: "Todo could not be deleted"
      });
    }

    return res.status(200).json({
      success: true,
      message: "Todo is deleted successfully"
    });

  } catch (error) {
    return res.status(500).json({
      success: false,
      message: error.message,
    });
  }
};
