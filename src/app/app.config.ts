// TODO link para documentação do URL resolver com docs e exemplos
export const AppRoutes = {
  '_defaults': {
    'host': 'http://localhost:8080/rest/',
  },
  'exemplo': {
    'url': 'exemplo',
    'method': 'GET'
  },
  'login': {
    'url': 'http://example.auth.com'
  }
};

export const AppConfig = {
  authentication: {
    http: {
      paramNameIdentity: 'username',
      paramNameCredential: 'password',
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
