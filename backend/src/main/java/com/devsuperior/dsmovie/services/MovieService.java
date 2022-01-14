package com.devsuperior.dsmovie.services;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import com.devsuperior.dsmovie.dto.MovieDto;
import com.devsuperior.dsmovie.entities.Movie;
import com.devsuperior.dsmovie.repositories.MovieRepository;
import lombok.RequiredArgsConstructor;

@Service
@RequiredArgsConstructor
public class MovieService {
	
	private final MovieRepository movieRepository;
	/*
	 * Ao invés de retorna uma List eu já estou retornando uma Page
	 */
	@Transactional(readOnly = true)
	public Page<MovieDto> findAll(Pageable pageable){
		Page<Movie> result = movieRepository.findAll(pageable);
		Page<MovieDto> page = result.map(x-> new MovieDto(x));
		return page;
		
	}
	
	@Transactional(readOnly = true)
	public MovieDto findById(Long id){
		Movie movie = movieRepository.findById(id).get();
		MovieDto movieDto = new MovieDto(movie);
		return movieDto;
		
	}
	
}
