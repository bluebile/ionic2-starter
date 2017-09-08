// TODO link para documentação do URL resolver com docs e exemplos
export const APP_ROUTES_DEV = {
  '_defaults': {
    'host': '',
    'variables': {
      'mm-url': ''
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
    'url': '{mm-url}/mba-mmmessage/client/tags/add',
    'method': 'PUT'
  },
  'notification-list-tags': {
    'url': '{mm-url}/mba-mmmessage/client/tags/{dsIdentity}/{noAppBundle}',
    'method': 'GET'
  },
  'mmmessage': {
    'url': '{mm-url}/mba-mmmessage'
  }
};

export const APP_ROUTES_PROD = {
  '_defaults': {
    'host': ''
  }
};

export const AppConfig = {
  preloadModules: true,
  onesingalAppId: {
    dev: '',
    staging: '',
    production: '',
  },
  mmApiKey: {
    dev: '',
    staging: '',
    production: ''
  },
  googleProjectNumber: {
    dev: '',
    staging: '',
    production: '',
  },
  urlResolver: {
    dev: APP_ROUTES_DEV,
    'prod:dev': APP_ROUTES_PROD
  },
  mmmural: {
    mmmessage: 'mmmessage'
  }
};
