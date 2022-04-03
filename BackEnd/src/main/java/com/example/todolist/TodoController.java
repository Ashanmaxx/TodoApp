package com.example.todolist;

import com.example.todolist.model.Todo;
import com.example.todolist.service.TodoService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.http.ResponseEntity;
import org.springframework.web.bind.annotation.*;

import javax.servlet.http.HttpServletRequest;

@RestController
@RequestMapping("toDoList/api")
@CrossOrigin
public class TodoController {

    @Autowired
    private TodoService todoService;

    @GetMapping("/getAllTodos")
    public ResponseEntity<?> getAllTodos() {
        return ResponseEntity.ok(todoService.findAll());
    }

    @PostMapping("/addTodo")
    public ResponseEntity<?> addTodo(@RequestBody Todo todo) {
        return ResponseEntity.ok(todoService.addTodo(todo));
    }

    @DeleteMapping("/delete/{id}")
    public ResponseEntity<?> removeTodo(@PathVariable Integer id) {
    	todoService.removeTodo(id);
    	return ResponseEntity.ok(id);
    }

    @PutMapping("/modifyTodo")
    public ResponseEntity<?> changeTodoState(@RequestBody Todo todo) {
        return ResponseEntity.ok(todoService.modifyTodo(todo));
    }

}