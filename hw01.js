var studentScore = 50;
var grade;

function main_function() {
    
    switch(true){ 
        case (studentScore <= 100) : 
            grade = "A";
            break;
        case (studentScore < 90 && studentScore >= 70) :
            grade = "B";
            break;
        case (studentScore < 70 && studentScore >= 60) :
            grade = "C";
            break;
        case (studentScore < 60 && studentScore >= 50) :
            grade = "D";
            break;
        case (studentScore < 50) :
            grade = "F";
            break;
        default :
            grade = "점수 입력값을 다시 확인해주십시오."
    }    		    		
};

console.log("당신의 점수는 ${studentScore}점이고, 학점은 ${grade}입니다.");