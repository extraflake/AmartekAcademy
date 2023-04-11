package com.academic.amartek;

// import java.time.LocalDate;
// import java.util.Arrays;
// import java.util.HashMap;
// import java.util.Map;

// import javax.mail.MessagingException;

// import org.assertj.core.api.Assertions;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;

// import java.util.ArrayList;
// import java.util.List;

// import org.assertj.core.api.Assertions;
// import org.junit.jupiter.api.Test;
// import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

// import com.academic.amartek.models.Email;
// import com.academic.amartek.services.EmailSenderService;

// import com.academic.amartek.models.Recruitment;
// import com.academic.amartek.models.Skill;
// import com.academic.amartek.services.IArrangeInterviewService;
// import com.academic.amartek.services.ISkillService;

@SpringBootTest
class AmartekApplicationTests {
// 	@Autowired
//     private EmailSenderService emailSenderService;

//     @Test
//     public void sendHtmlMessageTest() throws MessagingException {
//         Email email = new Email();
//         email.setTo("androrif29@gmail.com");
//         email.setFrom("farhanaziz939@gmail.com");
//         email.setSubject("Welcome Email from CodingNConcepts");
//         email.setTemplate("welcome-email.html");
//         Map<String, Object> properties = new HashMap<>();
//         properties.put("name", "Ashish");
//         properties.put("subscriptionDate", LocalDate.now().toString());
//         properties.put("technologies", Arrays.asList("Python", "Go", "C#"));
//         email.setProperties(properties);

//         Assertions.assertThatThrownBy(() -> emailSenderService.sendHtmlMessage(email));		
//     }
	// private ISkillService iSkillService;
	// private IArrangeInterviewService iArrangeInterviewService;

	// @Autowired
	// public AmartekApplicationTests(ISkillService iSkillService, IArrangeInterviewService iArrangeInterviewService) {
	// 	this.iSkillService = iSkillService;
	// 	this.iArrangeInterviewService = iArrangeInterviewService;
	// }

	// @Test
	// void insertSkill(){
	// 	// arrange				
	// 	Skill skill = new Skill();		
	// 	skill.setSkillName("Python Programming");		
	// 	//act
	// 	Boolean result = iSkillService.Save(skill);
	// 	// assert
	// 	Assertions.assertThat(result).isEqualTo(true);
	// }

	// @Test
	// void recruitmentsGetbyid(){
	// 	// Arrange
		
	// 	List<Recruitment> recruitments = new ArrayList<>();
	// 	//Act

	// 	Boolean result =  recruitments.add(1);

	// 	//Assert
	// 	Assertions.assertThat(result).isEqualTo(true);

	// }

	// @Test
	// void recruitmentsGetall(){
	// 	// Arrange
	// 	List<Recruitment> recruitments = iArrangeInterviewService.GetAll();
		
	// 	//Act
	// 	Boolean result =  recruitments.isEmpty();

	// 	//Assert
	// 	Assertions.assertThat(result).isEqualTo(false);

	// }


}
