// TODO link para documentação do URL resolver com docs e exemplos
export const AppRoutes = {
    '_defaults': {
        'host': 'http://localhost:8080/rest/',
    },
    'exemplo': {
        'url': 'exemplo',
        'method': 'GET'
    }
};

export const AppConfig = {
    urlResolver: {
        dev: AppRoutes
    }
};
