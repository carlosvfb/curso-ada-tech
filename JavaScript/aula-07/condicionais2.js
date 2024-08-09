// Muito útil quando sua variável possui valores específicos

const permissoes = "aluno"; // 'aluno' || 'professor' || 'admin'

switch (permissoes) {
  case "aluno":
    console.log("Você só pode vizualizar as aulas.");
    break;
  case "professor":
    console.log("Você pode alterar as aulas e adicionar exercícios.");
    break;
  case "admin":
    console.log("Você pode fazer o que quiser no sistema!");
    break;
  default:
    console.log("Você não tem permissão para acessar o sistema.");
    break;
}
