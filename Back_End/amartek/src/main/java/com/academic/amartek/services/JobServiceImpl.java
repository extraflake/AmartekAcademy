package com.academic.amartek.services;

import java.util.List;

import org.springframework.stereotype.Service;

import com.academic.amartek.models.Job;
import com.academic.amartek.repositories.JobRepository;

@Service
public class JobServiceImpl implements JobService {

    private JobRepository iJobRepository;

    public JobServiceImpl(JobRepository iJobRepository) {
        this.iJobRepository = iJobRepository;
    }
    
    @Override
    public List<Job> Get() {
        return iJobRepository.findAll();
    }

    @Override
    public Job Get(Integer id) {
        return iJobRepository.findById(id).orElseThrow(() -> new IllegalArgumentException("Data Job Tidak Ditemukan"));
    }

    @Override
    public Boolean Save(Job job) {
        iJobRepository.save(job);
        return iJobRepository.findById(job.getId()).isPresent();
    }

    @Override
    public Boolean Delete(Integer id) {
        iJobRepository.deleteById(id);
        return !iJobRepository.findById(id).isPresent();
    }
    
}
