package com.academic.amartek.repositories;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import com.academic.amartek.models.Job;

@Repository
public interface JobRepository extends JpaRepository<Job, Integer> {
    
}
