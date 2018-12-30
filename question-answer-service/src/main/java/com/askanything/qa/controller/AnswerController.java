package com.askanything.qa.controller;

import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RestController;

import com.askanything.qa.entity.Answer;
import com.askanything.qa.entity.Question;
import com.askanything.qa.repository.AnswerRepository;

@RestController
public class AnswerController {

	@Autowired
	AnswerRepository answerRepository;
	
	@GetMapping(value="answers/question/{id}")
	public List<Answer> getAnswer(@PathVariable int id){
		
		return answerRepository.findByQuestion(new Question(id));
	}
		
	@PostMapping(value="answers")
	public Answer saveAnswer(@RequestBody Answer answer){
		
		return answerRepository.save(answer);
	}
}
