package com.devsuperior.dsmovie.dto;

import com.devsuperior.dsmovie.entities.Movie;

import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@AllArgsConstructor
@NoArgsConstructor
public class MovieDto {

	private Long id;
	private String title;
	private Double score;
	private Integer count;
	private String image;
	
	public MovieDto(Movie movie) {
		id = movie.getId();
		title = movie.getTitle();
		score = movie.getScore();
		count = movie.getCount();
		image = movie.getImage();
	}
	
	
}
