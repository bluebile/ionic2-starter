// TODO link para documentação do URL resolver com docs e exemplos
export const AppRoutes = {
  '_defaults': {
    'host': 'http://192.168.10.72:8080/rest/',
  },
  'exemplo': {
    'url': 'exemplo',
    'method': 'GET'
  },
  'login': {
    'url': 'http://192.168.10.72:3000/auth'
  }
};

export const AppConfig = {
  authentication: {
    http: {
      url: 'login',
      paramNameIdentity: 'cpf',
      paramNameCredential: 'senha',
      headers: {
        'Content-type': 'application/x-www-form-urlencoded'
      }
    }
  },
  urlResolver: {
    dev: AppRoutes,
    'prod:dev': {
      '_defaults': {
        'host': 'http://example.com/rest/'
      }
    }
  }
};
