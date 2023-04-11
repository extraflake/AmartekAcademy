package com.academic.amartek.repositories;

import java.util.List;
import java.util.Optional;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import com.academic.amartek.models.User;

@Repository
public interface UserRepository extends JpaRepository<User, String> {
    User getById(User user);
    Boolean existsByEmail(String email);
    User findByEmail(String email);
    @Query("SELECT u FROM User u WHERE u.id = :id")
    Optional<User> findActiveUserById(@Param("id") String id);

    @Query("SELECT u FROM User u")
    List<User> findAllActiveUsers();
}
