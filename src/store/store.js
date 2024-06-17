import {createStore} from 'vuex'

export const store = createStore({
    state: {
        sizeitems: {
            1: {
                'text': 'small',
                'price': 5
            },
            2: {
                'text': 'medium',
                'price': 10
            },
            3: {
                'text': 'large',
                'price': 15
            },
            4: {
                'text': 'extra large',
                'price': 20
            },
        },
        size: 1,
        toppingitems: {
            1: {
                'text': 'Mushrooms',
                'price': 1
            },
            2: {
                'text': 'Olives',
                'price': 1
            },
            3: {
                'text': 'Tomato',
                'price': 0
            },
            4: {
                'text': 'Tona',
                'price': 3
            },
            5: {
                'text': 'Pineapple',
                'price': 3
            },
            6: {
                'text': 'Seafood',
                'price': 5
            },
            7: {
                'text': 'Pepperoni',
                'price': 2
            },
            8: {
                'text': 'Bacon',
                'price': 1
            },
            9: {
                'text': 'Onion',
                'price': 0
            },
            10: {
                'text': 'Mozzarella',
                'price': 3
            },
        },
        toppings: [],
        customer: {
            name: "",
            address: "",
            phone: ""
        }
    },
    getters: {
        getSize: state => state.size,
        getSizeItems: state => state.sizeitems,
        getToppings: state => state.toppings,
        getToppingItems: state => state.toppingitems,
        getCustomer: state => state.customer,
    },
    mutations: {
        setSize: (state, size) => state.size = size,
        setTopping: (state, toppings) => state.toppings = toppings,
        setCustomer: (state, customer) => state.customer = customer,
    },
})