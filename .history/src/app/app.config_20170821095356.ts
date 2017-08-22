// TODO link para documentação do URL resolver com docs e exemplos
export const APP_ROUTES_DEV = {
  '_defaults': {
    'host': 'http://192.168.10.72:8080/rest/',
    'variables': {
      'mock': 'http://192.168.10.72:3000'
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
        'type': 'string',
        'required': false
      },
      'dsEmail': {
        'type': 'string',
        'required': false
      },
      'nuPhone': {
        'type': 'string',
        'required': false
      },
      'tags': {
        'type': 'array',
        'required': false
      },
      'devices': {
        'type': 'array',
        'required': false
      }
    }
  }
};

export const AppConfig = {
  preloadModules: true,
  urlResolver: {
    dev: APP_ROUTES_DEV
  },
  http: {
    defaultOptions: {
      timeout: 15000
    }
  }
};
