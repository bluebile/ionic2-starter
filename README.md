# Ionic-Starter

Projeto starter com features comuns para os projetos.

- Login
- Menu
- Home
- Termo
- Onboard

# Iniciar Server mock
```npm run server:init```

# Build Cordova

| Plataforma    | Comando                     |
| ------------- |-----------------------------|
| Android       | ```npm run build:android``` |
| iOS           | ```npm run build:ios```     |
| Windows       | ```npm run build:windows``` |

Passando options do [Ionic-App-Scripts](https://github.com/driftyco/ionic-app-scripts/blob/master/README.md) para alguns dos comandos listados basta adicionar ```--``` após o comando desejado
ex: ```npm run build:android -- --prod```

# Desenvolvimento

## Gerando novo release

- Passo 1 - Incrementar o package.json
- Passo 2 - Criar/Atualizar changelog(CHANGELOG.md) através dos commits ```npm run changelog```
- Passo 3 - Gerando tag no github ```npm run gh:release <access_token>```
