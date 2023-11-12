function convertScoreToGradeWithPlusAndMinus(score) {
    // your code here
    if (score <0 || score >100) return 'INVALID SCORE';
    else{
        if (score > 97) return 'A+';
        if (97>= score && score >92) return 'A';
        if (92>= score && score >89) return 'A-';
        if (89>= score && score >87) return 'B+';
        if (87>= score && score >82) return 'B';
        if (82>= score && score >79) return 'B-';
        if (79>= score && score >77) return 'C+';
        if (77>= score && score >72) return 'C';
        if (72>= score && score >69) return 'C-';
        if (69>= score && score >67) return 'D+';
        if (67>= score && score >62) return 'D';
        if (62>= score && score >59) return 'D-';
        if (score<=59) return 'F';
    }
}

let output = convertScoreToGradeWithPlusAndMinus(91);
console.log(output); // --> 'A-'
