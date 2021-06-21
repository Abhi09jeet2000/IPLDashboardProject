package com.ipl.ipldashboard.repository;

import org.springframework.data.repository.CrudRepository;

import com.ipl.ipldashboard.model.Team;

public interface TeamRepository extends CrudRepository<Team,Long>{

	Team findByTeamName(String teamName);
	
	
}
