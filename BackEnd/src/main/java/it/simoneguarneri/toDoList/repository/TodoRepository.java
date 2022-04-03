package it.simoneguarneri.toDoList.repository;

import it.simoneguarneri.toDoList.model.Todo;
import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;

import java.util.List;

@Repository
public interface TodoRepository extends JpaRepository<Todo, Integer>{
    List<Todo> findByStatus(boolean status);
}