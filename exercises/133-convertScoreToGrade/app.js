function convertScoreToGrade(score) {
    // your code here
    if (score < 0 || score > 100) return "INVALID SCORE";
    else{
        if (score>=90) return 'A';
        if (80<=score && score<90) return 'B';
        if (70<=score && score<80) return 'C';
        if (60<=score && score<70) return 'D';
        if (score<60) return 'F';
    }
}

let output = convertScoreToGrade(91);
console.log(output); // --> 'A'
