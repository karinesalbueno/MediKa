# MediKa


#### Utilitários:
- Autenticação de usuário pelo Jwt
- criptografia de senha com bcrypt
#### porta = (3000)

- get ( {porta}/user/services ) = Json de serviços
- get ( {porta}/insert-services ) = Inserse os serivços selecionados no bd
- post ( {porta}/user/sign-up ) = Cadastro de login no bd < nome, email, senha >
return
 ```  
 {
	"status": true,
	"message": "Cadastrado com sucesso! :)"
}
```
- get ( {porta}/user/auth ) = Token de acesso para login
```
{
	"access_token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpYXQiOjE2NjYzOTk3NzI...."
}
```


##  rodar o projeto:
Para rodar esta aplicação é necessário Git, Node.js e gerenciador de pacotes NPM ou Yarn.
```bash
# Clone o repositório
$ git clone https://github.com/karinesalbueno/MediKa.git

# vá até a pasta
$ cd mediKa

# instale as dependencias
$ npm install

# run front-end
$ npm run start

# run back-end (api)
$ npm run start:dev
```


## :rocket: Screenshots
![image](https://user-images.githubusercontent.com/55932953/197310065-b4712074-1494-49bf-b69e-be9427c54c81.png)
![image](https://user-images.githubusercontent.com/55932953/197310204-77928b4d-ac7d-4938-8fb1-a8ca548f11ce.png)



