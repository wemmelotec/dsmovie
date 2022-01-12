package com.devsuperior.dsmovie.dto;

import lombok.Data;
import lombok.NoArgsConstructor;

@Data
@NoArgsConstructor
public class ScoreDto {

	private Long movieId;
	private String email;
	private Double score;
}
