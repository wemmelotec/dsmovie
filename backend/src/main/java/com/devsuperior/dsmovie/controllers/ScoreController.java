package com.devsuperior.dsmovie.controllers;

import org.springframework.stereotype.Service;
import org.springframework.web.bind.annotation.PutMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;
import com.devsuperior.dsmovie.dto.MovieDto;
import com.devsuperior.dsmovie.dto.ScoreDto;
import com.devsuperior.dsmovie.services.ScoreService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/scores")
@RequiredArgsConstructor
public class ScoreController {
		
	private final ScoreService scoreService;
	
	@PutMapping
	public MovieDto saveScore(@RequestBody ScoreDto scoreDto){
		return scoreService.saveScore(scoreDto);
	}
	
}
