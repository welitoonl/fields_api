## API de Campos parametrizáveis

 A ideia da api é o usuário poder criar um formulário com campos parametrizáveis

- As opções deste campo são:
-- text, podendo ter no máximo 30 caracteres
-- bigtext, podendo ter no máximo 100 caracteres
-- Compo, sendo um select com 3 opções

- Os campos são:

-- fieldID (sendo o nome e id do campo)
-- label (sendo a descrição do campo)
-- position (sendo a posição que o campo irá ficar no formulário)
-- type (sendo o tipo de campo, das opções citadas acima)
-- typeRules (regras do campo de acordo com seu tipo)

- Api desenvolvida seguindo REST, Clean Code e Architecture e SOLID

- Porta 3333

  Backend feito utilizando:

  Node com:
   typescript
   express - Para o server
   typeOrm - Para o banco de dados
   tsrynger - Para injeções de dependência
   PostgreSQL
   Docker

  Ainda a ser feito

   Documentação com Swagger
   Front: Vuejs e Nuxtjs

  Para testar basta rodar na raiz do projeto:

  yarn install

  docker-compose up -d

  yarn typeorm migration:run
    Cria a tabela de Fields no banco de dados
    O acesso ao banco está no arquivo ormconfig.json

  Tive alguns problemas para manter o server rodando pelo docker quando há alguma falha de requisição para a API, caso o servidor caia:
   Na shell do docker:
   npm run dev

atalho para teste:

  {
		"fieldId": "name",
		"label": "Nome",
		"type": "combo",
		"position": 1,
		"inputValue": {
				"firstOption": {
				"description": "Opção 01",
				"value": "op1"
			},
				"secondOption": {
				"description": "Opção 02",
				"value": "op2"
			},
				"thirdOption": {
				"description": "Opção 03",
				"value": "op3"
			}
		}
	}