'use strict';

function getGrade(score) {
    let grade;
    let left = 0;
    let rigth = 5;
    let notas = "FEDCBA";
    // Write your code here
    for (let i = 0; i <= 5; i++) {
        notas.charAt(i);
        if (left <= score && score <= rigth) {
            grade = notas.charAt(i);
            break;
        }
        left += 5;
        rigth += 5;
    }
    console.log(grade);
    return grade;
}
getGrade(25);
// Not Loop

function grade(pontuacaoExame) {
    let notaLetra;

    if (pontuacaoExame > 25) {
        notaLetra = 'A';
    } else if (pontuacaoExame > 20) {
        notaLetra = 'B';
    } else if (pontuacaoExame > 15) {
        notaLetra = 'C';
    } else if (pontuacaoExame > 10) {
        notaLetra = 'D';
    } else if (pontuacaoExame > 5) {
        notaLetra = 'E';
    } else {
        notaLetra = 'F';
    }

    return notaLetra;
}
grade(25);

