const express = require("express");
const { getTodo, createTodo, deleteTodo } = require("../controllers/todo-controller");
const router = express.Router()

router.post("/create", createTodo);
router.delete("/delete", deleteTodo);
router.get("/get", getTodo)

module.exports = router