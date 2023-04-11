package com.academic.amartek.repositories;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.stereotype.Repository;

import com.academic.amartek.models.Univ;

@Repository
public interface UnivRepository extends JpaRepository <Univ, Integer> {
    
    @Query(value = "SELECT * FROM tb_m_univ", nativeQuery = true)
    public List<Map<String, Object>> GetUniv();
}
