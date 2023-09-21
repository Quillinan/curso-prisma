import prisma from "database";

async function seed() {
  try {
    const existingCustomer = await prisma.customer.findUnique({
      where: {
        document: "133.245.497-60",
      },
    });

    if (!existingCustomer) {
      await prisma.customer.create({
        data: {
          firstName: "Geraldo Luiz",
          lastName: "Datena",
          document: "133.245.497-60",
        },
      });
      console.log("Cliente cadastrado com sucesso.");
    } else {
      console.log("Já existe um cliente com o mesmo documento.");
    }
  } catch (error) {
    console.error("Erro ao cadastrar o cliente:", error);
  } finally {
    await prisma.$disconnect();
  }
}

seed();
