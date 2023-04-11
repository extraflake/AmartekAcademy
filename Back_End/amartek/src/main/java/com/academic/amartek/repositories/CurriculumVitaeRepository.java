package com.academic.amartek.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import org.springframework.stereotype.Repository;

import com.academic.amartek.dto.CurriculumVitaeDTO;
import com.academic.amartek.models.User;


@Repository
public interface CurriculumVitaeRepository {
    // @Query(value = "SELECT " +
    //                 "new com.academic.amartek.dto.CurriculumVitaeDTO(" +
    //                 "u.id, " +
    //                 "u.email, " +
    //                 "b.id, " +
    //                 "b.fullname, " +
    //                 "b.birth_date, " +
    //                 "b.no_telp, " +
    //                 "b.address, " +
    //                 "b.summary, " +
    //                 "s.id, " +
    //                 "s.skill_name, " +
    //                 "p.id, " +
    //                 "p.name, " +
    //                 "p.project_start, " +
    //                 "p.project_end, " +
    //                 "p.project_desc, " +
    //                 "d.degree_name, " +
    //                 "un.univ_name, " +
    //                 "m.major_name, " +
    //                 "e.GPA) " +
    //             "FROM " +
    //                 "tb_m_user u " +
    //             "LEFT JOIN " +
    //                 "tb_tr_userskill su ON u.id = su.user_id " +
    //             "LEFT JOIN " +
    //                 "tb_m_skill s ON su.skill_id = s.id " +
    //             "LEFT JOIN " +
    //                 "tb_m_project p ON u.id = p.user_id " +
    //             "LEFT JOIN " +
    //                 "tb_tr_education e ON u.id = e.user_id " +
    //             "LEFT JOIN " +
    //                 "tb_m_degree d ON e.degree_id = d.id " +
    //             "LEFT JOIN " +
    //                 "tb_m_univ un ON e.univ_id = un.id " +
    //             "LEFT JOIN " +
    //                 "tb_m_major m ON e.major_id = m.id " +
    //             "LEFT JOIN " +
    //                 "tb_m_biodata b ON u.id = b.id " +
    //             "WHERE " +
    //                 "u.id = :userId")
    // public CurriculumVitaeDTO getCurriculumVitaeDTO(@Param("userId") String userId);

   

    
    
}
