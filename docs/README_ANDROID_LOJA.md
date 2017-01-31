# Realizando submissão - PlayStore
![PLAYSTORE](/docs/img/playstore.png)

## Pré-requisítos

- A MBA Mobi recomenda 5 prints(o google exige entre 2 e 8 prints) do app tirados a partir de um device android (Enviar para o UX, junto com pequeno texto que descreve cada tela. O formato disponibilizado pelo UX deverá ser: 1080px × 1920px JPEG ou PNG de 24 bits (sem alfa)).
- Icone do App (512px x 512px PNG de 32 bits (com alfa), Disponibilizado pelo UX)
- Gráfico de recursos - Banner - (1024px x 500px a JPG ou PNG de 24 bits (sem alfa))
- Breve descrição do aplicativo (Texto com até 80 caracteres)
- Descrição completa (Até 4000 caracteres)
- Alguns detalhes do app: *Tipo de app, *Categoria, Site, *E-mail, link de Política de Privacidade. (Itens com * são obrigatórios)
- Não se esqueça de HOMOLOGAR os TEXTOS e IMAGENS junto ao clinte.
- Não se esqueça de HOMOLOGAR o icone do app e a splash screen!

## Realizando build realease
### Sencha

`$ rm -rf  cordova/www/* cordova/platforms/* cordova/plugins/* vendor/ cordova/config_timestamp.xml #limpa temporários`

`$ bower install #instala vendor`

`$ ./sencha app build android --env production --buildConfig=CAMINHO_PARA_BUILD_JSON/build.json --release #realiza build`

### Ionic

`$ inonic build --release production --buildConfig=CAMINHO_PARA_BUILD_JSON/build.json --release #realiza build`
* OBS: caso o build.json esteja na pasta .cordova da raiz do projeto não é necessário o parametro "--buildConfig=CAMINHO_PARA_BUILD_JSON/build.json"

### Iniciando Publicação na loja

#### Aba "DETALHES DO APP"
- Abra o link da [PlayStore](https://play.google.com/apps/publish/signup/) e realize login
- Click em '+ Criar app'
![Tela 1](/docs/img/tela1.png)
- Defina o nome do app, e click em 'criar'""
- Preencha a 'Breve descrição do aplicativo' e 'Descrição completa'
![Tela 2](/docs/img/tela2.png)
- Adicione o icones e as imagens
- Scrolle a tela em "RECURSOS GRÁFICOS", e faça a submissão um a um dos prints, clicando em "Adicionar captura de tela"
![Tela 3](/docs/img/tela3.png)
- Adicione o icone e Gráfico de recursos (banner)
![Tela 4](/docs/img/tela4.png)
- Preencha os demais dados com as informações citadas nos pré requisítos.
![Tela 5](/docs/img/tela5.png)

#### Aba "APK"


#### Aba "CLASSIFICAÇÃO DO CONTEÚDO"
