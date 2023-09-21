import prisma from "./database";

async () => {
  const students = await prisma.student.groupBy({
    by: ["class"],
    _count: {
      id: true,
    },
    orderBy: {
      _count: {
        id: "desc",
      },
    },
  });

  console.log("Agrupamento de alunos por turma:");
  console.log(students);
};

async () => {
  const studentsWithoutJobByClass = await prisma.student.groupBy({
    by: ["class"],
    where: {
      jobId: null,
    },
    _count: {
      id: true,
    },
    orderBy: {
      _count: {
        id: "desc",
      },
    },
  });

  console.log("Agrupamento de alunos por turma que ainda não tem trabalho:");
  console.log(studentsWithoutJobByClass);
};
