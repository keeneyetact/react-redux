export default function StudentList ({assignmentMarkData, quizMarkData}) {
    let result = [];
    
    result = assignmentMarkData?.reduce((acc, cur) => {
        const student = acc.find((s) => s.student_id == cur.student_id);
        if (student) {
          student.assignmentMark += Number(cur.mark);
          student.totalMark += Number(cur.mark);
        } else {
          acc.push({
            student_id: cur.student_id,
            student_name: cur.student_name,
            totalMark: Number(cur.mark),
            assignmentMark: Number(cur.mark),
            quizMark: 0
          });
        }
        return acc;
      }, []) 

    quizMarkData?.map((quiz) => {
        const student = result?.find((s) => s.student_id == quiz.student_id);
        if (student) {
          student.quizMark += Number(quiz.mark);
          student.totalMark += Number(quiz.mark);
        } else {
          result.push({
            student_id: quiz.student_id,
            student_name: quiz.student_name,
            totalMark: Number(quiz.mark),
            assignmentMark: 0,
            quizMark: Number(quiz.mark)
          });
        }
    
      })
      
    return result
}