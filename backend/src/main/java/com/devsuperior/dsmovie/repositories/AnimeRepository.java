package com.devsuperior.dsmovie.repositories;

import org.springframework.data.jpa.repository.JpaRepository;

import com.devsuperior.dsmovie.entities.Anime;

public interface AnimeRepository extends JpaRepository<Anime, Long>{

}
