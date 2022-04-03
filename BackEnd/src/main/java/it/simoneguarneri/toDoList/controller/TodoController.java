package it.simoneguarneri.toDoList.controller;

import it.simoneguarneri.toDoList.model.Todo;
import it.simoneguarneri.toDoList.service.TodoService;
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
    private ResponseEntity<?> loginRequest(HttpServletRequest httpServletRequest) {
        return ResponseEntity.ok(todoService.findAll());
    }

    @PostMapping("/addTodo")
    private ResponseEntity<?> addTodo(@RequestBody Todo todo) {
        return ResponseEntity.ok(todoService.addTodo(todo));
    }

    @DeleteMapping("/delete/{id}")
    private ResponseEntity<?> removeTodo(@PathVariable Integer id, HttpServletRequest httpServletRequest) {
    	todoService.removeTodo(id);
    	return ResponseEntity.ok(id);
    }

    @PutMapping("/modifyTodo")
    private ResponseEntity<?> changeTodoState(@RequestBody Todo todo, HttpServletRequest httpServletRequest) {
        return ResponseEntity.ok(todoService.modifyTodo(todo));
    }

}