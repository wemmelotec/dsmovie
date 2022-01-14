package com.devsuperior.dsmovie.controllers;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.devsuperior.dsmovie.dto.MovieDto;
import com.devsuperior.dsmovie.services.MovieService;
import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/movies")
@RequiredArgsConstructor
public class MovieController {
		
	private final MovieService movieService;
	
	@GetMapping
	public Page<MovieDto> findall(Pageable pageable){
		return movieService.findAll(pageable);
	}
	
	@GetMapping(value = "/{id}")
	public MovieDto findByID(@PathVariable Long id){
		return movieService.findById(id);
	}
	
}
