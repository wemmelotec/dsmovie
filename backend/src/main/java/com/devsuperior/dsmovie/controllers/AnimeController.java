package com.devsuperior.dsmovie.controllers;

import java.util.List;

import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

import com.devsuperior.dsmovie.entities.Anime;
import com.devsuperior.dsmovie.services.AnimeService;

import lombok.RequiredArgsConstructor;

@RestController
@RequestMapping(value = "/animes")
@RequiredArgsConstructor
public class AnimeController {
	
	private final AnimeService animeService;
	
	@GetMapping
	public List<Anime> listAll(){
		return animeService.listAll();
	}

}
