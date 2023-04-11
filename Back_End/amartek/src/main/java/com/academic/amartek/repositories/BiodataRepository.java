package com.academic.amartek.repositories;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.academic.amartek.models.Biodata;


@Repository
public interface BiodataRepository extends JpaRepository<Biodata, String> {

    @Query(value = "SELECT b.id, b.fullname, b.birth_date, b.no_telp, b.address, b.summary FROM tb_m_biodata b " +
    "WHERE b.id =:userId", nativeQuery = true)
    public List<Map<String, Object>> getBiodata(@Param("userId") String userId);

    @Transactional
    @Modifying
    @Query(value = "DELETE FROM tb_m_biodata WHERE id =:id", nativeQuery = true)
    public void deleteBiodata(@Param("id") String id);
    
}
