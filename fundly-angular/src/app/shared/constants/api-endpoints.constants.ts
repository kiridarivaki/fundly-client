export const API_ENDPOINTS = {
    USER: {
        BASE: 'user',
        REGISTER: '/register',
        PROFILE: '/profile/{id}',
        EDIT: '/edit/{id}'
    },  
    GOAL: {
        BASE: 'goal'    
    },
    EXPENSE: {
        BASE: 'expense',
        MANAGER: '/expense-manager',
        ADD: '/add',
        DETAILS: '/details/{id}',
        EDIT: '/edit/{id}',
        DELETE: '/delete/{id}'
    },
    EXPENSE_CATEGORY: {
        BASE: 'expense-category',
        LIST: '/list',
        ADD: '/add',
        DETAILS: '/details/{id}',
        EDIT: '/edit/{id}',
        DELETE: '/delete/{id}'
    }
};