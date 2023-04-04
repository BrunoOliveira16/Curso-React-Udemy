# 📌 Setup do TypeScript
## ✅ Oque é TypeScript?
- TypeScript é um superset para a linguagem JavaScript;
- Ou seja, adiciona funções ao JavaScript, como a declaração de tipos de variável;
- Pode ser utilizado com frameworks/libs, como: Express e React;
- Precisa ser compilado em JavaScript, ou seja, não executamos TS;
- Desenvolvido e mantido pela Microsoft;

<br>

## ✅ Porque TypeScript?
- Adiciona confiabilidade ao programa(tipos);
- Provê novas funcionalidades a JS, como interfaces;
- Com TS podemos verificar os erros antes da execução do código, ou seja, no desenvolvimento;
- Deixa JavaScript mais explicito, diminuindo a quantidade de bugs;
- Por estes e outros motivos perdemos menos tempo com debug;

<br>

## ✅ Instalando o TypeScript
- Para instalar o TypeScript vamos utilizar o npm;
- O nome do pacote é typescript;
- E vamos adicionar de forma global com a flag -g;
- A partir da instalação temos como executar/compilar TS em qualquer local da nossa máquina, com o comando tsc;

Comando de instalação:
```
npm install typescript -g
```

Para Checar a versão que está rodando, efetue o comando abaixo:
```
tsc -v
```

<br>

## ✅ Primeiro programa com TypeScript
- Vamos criar nosso primeiro programa em TS;
- O intuito é entender como compilar e executar o arquivo gerado pelo processo de compilação;

Para compilar o arquivo, basta digitar o comando abaixo na raiz do arquivo:
```
tsc nomeDoArquivo.ts

ex: tsc index.ts
```

