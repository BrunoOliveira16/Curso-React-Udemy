const UserDetails = ({nome, idade, profissão}) => {
  return (
    <div>
        <h2>Detalhes do Usuário</h2>
        <ul>
            <li>Nome: {nome}</li>
            <li>Idade: {idade}</li>
            <li>Profissão: {profissão}</li>
        </ul>
        {idade >= 18 ?(
            <h4>{nome} está apto(a) para tirar a carteira de habilitação!</h4>
        ) : (
            <h4>{nome} não está apto(a) para tirar a carteira de habilitação!</h4>
        )}
    </div>
  );
};

export default UserDetails;