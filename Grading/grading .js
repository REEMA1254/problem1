// Function : Calculates grade
function calculateGrade(marks) {
  if (marks > 79 && marks <= 100) {
    return 'A';
  } else if (marks >= 60 && marks <= 79) {
    return 'B';
  } else if (marks >= 50 && marks <= 59) {
    return 'C';
  } else if (marks >= 40 && marks <= 49) {
    return 'D';
  } else if (marks >= 0 && marks < 40) {
    return 'E';
  } else {
    return 'Invalid input. Marks should be between 0 and 100.';
  }
}
module.exports = calculateGrade;