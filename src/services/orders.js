

export const findAll = async () => {
    return [
        { number: '111', store: '1', customer: 'Pepito', lines: [
            {code: 'aaa', name: 'lámpara', quantity: 2, payed: false}
        ]},
        { number: '222', store: '1', customer: 'Juanito', lines: [
            {code: 'aaa', name: 'lámpara', quantity: 1, payed: false},
            {code: 'bbb', name: 'jamón', quantity: 3, payed: false},
            {code: 'ccc', name: 'escoba', quantity: 12, payed: false}
        ]},
        { number: '333', store: '2', customer: 'Menganito', lines: [
            {code: 'ccc', name: 'escoba', quantity: 25, payed: true},
            {code: 'ddd', name: 'puerta', quantity: 4, payed: true}        
        ]},
        { number: '123', store: '1', customer: 'Paula', lines: [
            {code: 'aaa', name: 'lámpara', quantity: 6, payed: false},
            {code: 'eee', name: 'ventana', quantity: 1, payed: false},
            {code: 'fff', name: 'tornillo', quantity: 200, payed: true},
            {code: 'ccc', name: 'escoba', quantity: 3, payed: false}
        ]}
    ]
}  