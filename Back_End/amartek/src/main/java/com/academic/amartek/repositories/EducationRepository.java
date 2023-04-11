package com.academic.amartek.repositories;

import java.util.List;
import java.util.Map;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;
import org.springframework.transaction.annotation.Transactional;

import com.academic.amartek.models.Education;

@Repository
public interface EducationRepository extends JpaRepository<Education, Integer> {


    @Query(value = "SELECT e.id, e.user_id, e.gpa, d.id AS degreeName, d.degree_name, u.id AS univId, u.univ_name, m.id AS majorId, m.major_name " +
    "FROM tb_tr_education e " +
    "LEFT JOIN tb_m_degree d ON e.degree_id = d.id " +
    "LEFT JOIN tb_m_univ u ON e.univ_id = u.id " +
    "LEFT JOIN tb_m_major m ON e.major_id = m.id WHERE e.user_id =:userId", nativeQuery = true)
    public List<Map<String, Object>> getEducations(@Param("userId") String userId);

    @Query(value = "SELECT u.id AS userId, u.email, b.id AS bioid, b.fullname, b.birth_date, b.no_telp, b.address, b.summary, " +
        "s.skill_name, p.name, p.project_start, p.project_end, p.project_desc, d.degree_name, un.univ_name, " +
        "m.major_name, e.GPA " +
        "FROM tb_m_user u " +
        "LEFT JOIN tb_tr_userskill su ON u.id = su.user_id " +
        "LEFT JOIN tb_m_skill s ON su.skill_id = s.id " +
        "LEFT JOIN tb_m_project p ON u.id = p.user_id " +
        "LEFT JOIN tb_tr_education e ON u.id = e.user_id " +
        "LEFT JOIN tb_m_degree d ON e.degree_id = d.id " +
        "LEFT JOIN tb_m_univ un ON e.univ_id = un.id " +
        "LEFT JOIN tb_m_major m ON e.major_id = m.id " +
        "LEFT JOIN tb_m_biodata b ON u.id = b.id " +
        "WHERE u.id =:userId", nativeQuery = true)
    public List<Map<String, Object>> getCV(@Param("userId") String userId);
   

    //Education findByUserId(String userId);
    @Transactional
    @Modifying
    @Query(value = "DELETE FROM tb_tr_education WHERE id =:id", nativeQuery = true)
    public void deleteEducation(@Param("id") Integer id);

    public List<Education> findByUserId(String userId);
    
}
