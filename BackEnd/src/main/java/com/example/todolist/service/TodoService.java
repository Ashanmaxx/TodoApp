package com.example.todolist.service;

import java.util.List;

import com.example.todolist.model.Todo;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.example.todolist.repository.TodoRepository;

@Service
public class TodoService {

    @Autowired
    private TodoRepository todoRepository;

    public Todo addTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public void removeTodo(Integer id) {
        todoRepository.deleteById(id);
    }

    public Todo modifyTodo(Todo todo) {
        return todoRepository.save(todo);
    }

    public List<Todo> findAll() {
        return todoRepository.findAll();
    }
}
