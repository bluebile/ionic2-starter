// TODO link para documentação do URL resolver com docs e exemplos
export const APP_ROUTES_DEV = {
  '_defaults': {
    'host': 'http://ec2-52-67-203-191.sa-east-1.compute.amazonaws.com:8080/rest/',
    'variables': {
      'mm-url': 'http://ec2-52-67-203-191.sa-east-1.compute.amazonaws.com:8080'
    }
  },
  'notification-register-client': {
    'url': '{mm-url}/mba-mmmessage/client',
    'method': 'POST',
    'params': {
      'noAppBundle': {
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
      }
    }
  },
  'notification-update-tags': {
    'url': '{mm-url}/mba-mmmessage/client/tags',
    'method': 'PUT'
  },
  'notification-list-tags': {
    'url': '{mm-url}/mba-mmmessage/client/tags/{dsIdentity}/{noAppBundle}',
    'method': 'GET'
  },
  'mmmessage': {
    'url': 'http://ec2-52-67-203-191.sa-east-1.compute.amazonaws.com:8080/mba-mmmessage'
  }
};

export const APP_ROUTES_PROD = {
  '_defaults': {
    'host': 'http://ec2-52-67-203-191.sa-east-1.compute.amazonaws.com:8080/rest/'
  }
};

export const AppConfig = {
  preloadModules: true,
  onesingalAppId: {
    dev: '19677f2e-9e7d-4187-9a3a-ba226200ae07',
    staging: '19677f2e-9e7d-4187-9a3a-ba226200ae07',
    production: '19677f2e-9e7d-4187-9a3a-ba226200ae07',
  },
  mmApiKey: {
    dev: 'aeb1f4c55bb757427d66ae1094d732d781f78af5',
    staging: 'aeb1f4c55bb757427d66ae1094d732d781f78af5',
    production: 'aeb1f4c55bb757427d66ae1094d732d781f78af5'
  },
  googleProjectNumber: {
    dev: '101349642110',
    staging: '101349642110',
    production: '101349642110',
  },
  urlResolver: {
    dev: APP_ROUTES_DEV,
    'prod:dev': APP_ROUTES_PROD
  },
  mmmural: {
    mmmessage: 'mmmessage'
  }
};
