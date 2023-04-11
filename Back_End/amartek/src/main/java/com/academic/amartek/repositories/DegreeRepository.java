package com.academic.amartek.repositories;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.academic.amartek.models.Degree;

@Repository
public interface DegreeRepository extends JpaRepository <Degree, Integer>{

    @Query(value = "SELECT * FROM tb_m_degree", nativeQuery = true)
    public List<Map<String, Object>> GetDegree();
    
}
