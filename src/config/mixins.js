
export const setUser = user => localStorage.setItem('my-app-user', Buffer.from(JSON.stringify(user)).toString('base64'))

export const getUser = () => localStorage.hasOwnProperty('my-app-user') ? 
    JSON.parse(Buffer.from(localStorage.getItem('my-app-user'), 'base64').toString()) : null

export const sortArray = (arr, key, asc) => arr.sort((a,b)=>{
    if(!a[key]) return asc? -1 : 1
    else if(!b[key]) return asc? 1 : -1
    else if(a[key] > b[key]) return asc ? 1 : -1
    else if(a[key] < b[key]) return asc ? -1 : 1
    else return 0
})