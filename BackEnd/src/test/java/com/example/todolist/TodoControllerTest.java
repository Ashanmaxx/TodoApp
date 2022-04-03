package com.example.todolist;

import com.example.todolist.model.Todo;
import org.junit.After;
import org.junit.Assert;
import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;
import org.springframework.http.ResponseEntity;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;

import java.time.LocalDate;

@SpringBootTest
@RunWith(SpringJUnit4ClassRunner.class)
public class TodoControllerTest {

    @Autowired
    TodoController testTodoController;

    private Todo todo;

    @Before
    public void setUp() throws Exception {
        todo = new Todo();
        todo.setDueDate(LocalDate.now());
        todo.setTitle("Test Title");
        todo.setDescription("Test Description");
    }

    @After
    public void tearDown() throws Exception {
        todo = null;
    }

    @Test
    public void testGetAllTodos() {
        ResponseEntity<?> response = testTodoController.getAllTodos();
        Assert.assertNotNull("Null not failure", response);
    }

    @Test
    public void testAddTodo() {
        ResponseEntity<?> response = testTodoController.addTodo(todo);
        Assert.assertNotNull("Null not failure", response);
    }
}