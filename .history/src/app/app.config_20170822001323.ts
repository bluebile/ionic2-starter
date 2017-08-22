// TODO link para documentação do URL resolver com docs e exemplos
export const APP_ROUTES_DEV = {
  '_defaults': {
    'host': 'http://192.168.10.72:8080/rest/',
    'variables': {
      'mock': 'http://localhost:3000'
    }
  },
  'login': {
    'url': '{mock}/auth'
  },
  'usuarios': {
    'url': '{mock}/usuarios'
  },
  'notification-register-client': {
    'url': 'http://162.243.107.16:8888/mba-mmmessage/client',
    'method': 'POST',
    'params': {
      'idApp': {
        'type': 'string',
        'required': true
      },
      'dsIdentity': {
        'type': 'string',
        'required': true
      },
      'noClient': {

        'type': 'string'
      },
      'dsEmail': {
        'type': 'string'
      },
      'nuPhone': {
        'type': 'string'
      },
      'tags': {
        'type': 'array'
      },
      'devices': {
        'type': 'array'
      }
    },
    'notification-update-tags': {
      'url': 'http://162.243.107.16:8888/mba-mmmessage/client/tags',
      'method': 'POST',
      'params': {
        'dsIdentity': {
          'type': 'string'
        },
        'tags': {
          'type': 'array'
        }
      }
    }
  },
  'mmmessage': {
    'url': 'http://162.243.107.16:8888/mba-mmmessage'
  }
};

export const AppConfig = {
  preloadModules: true,
<<<<<<< Updated upstream
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
  onesingalAppId: {
    dev: '19677f2e-9e7d-4187-9a3a-ba226200ae07',
    staging: '19677f2e-9e7d-4187-9a3a-ba226200ae07',
    production: '19677f2e-9e7d-4187-9a3a-ba226200ae07',
  },
  appBundle: {
    dev: 'br.com.mbamobi.ionic.starter',
    staging: 'br.com.mbamobi.ionic.starter',
    production: 'br.com.mbamobi.ionic.starter',
  },
  googleProjectNumber: {
    dev: '101349642110',
    staging: '101349642110',
    production: '101349642110',
  },
=======
>>>>>>> Stashed changes
  urlResolver: {
    dev: APP_ROUTES_DEV
  },
  onesingalAppId: {
    dev: '19677f2e-9e7d-4187-9a3a-ba226200ae07',
    staging: '19677f2e-9e7d-4187-9a3a-ba226200ae07',
    production: '19677f2e-9e7d-4187-9a3a-ba226200ae07',
  },
  appBundle: {
    dev: 'br.com.mbamobi.ionic.starter',
    staging: 'br.com.mbamobi.ionic.starter',
    production: 'br.com.mbamobi.ionic.starter',
  },
  googleProjectNumber: {
    dev: '101349642110',
    staging: '101349642110',
    production: '101349642110',
  },
  http: {
    defaultOptions: {
      timeout: 15000
    }
  },
  mmprovider: {
    mmmessage: 'mmmessage'
  }
};
