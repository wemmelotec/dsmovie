package com.devsuperior.dsmovie.services;

import java.util.List;

import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;

import com.devsuperior.dsmovie.entities.Anime;
import com.devsuperior.dsmovie.repositories.AnimeRepository;

import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class AnimeService {
	
	private final AnimeRepository animeRepository;
	
	@Transactional(readOnly = true)
	public List<Anime> listAll() {
		return animeRepository.findAll();
	}
}
