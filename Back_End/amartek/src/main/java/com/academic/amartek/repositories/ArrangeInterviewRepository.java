

package com.academic.amartek.repositories;

import java.util.List;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.stereotype.Repository;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;

import com.academic.amartek.models.Recruitment;

/**
 * IArrangeInterview
 Repository
*/
 
@Repository
public interface ArrangeInterviewRepository extends JpaRepository<Recruitment, Integer>  {
    @Query(value = "select * from tb_tr_recruitment rec inner join tb_m_user user on rec.aaplicant_id = user_id", nativeQuery = true)
    public  List<Recruitment> Getall();

    // @Query(value = "Update tb_tr_recruitments set date_interview_trainer = :datehr where id = :id)", nativeQuery = true)
    // public Optional<Recruitment> Insertdatehr(@Param("id") Integer id, @Param("datehr") String datehr);
}