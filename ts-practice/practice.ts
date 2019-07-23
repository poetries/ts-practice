interface userInfo {
    name: string,
    age: number,
    phone: number,
    sex?: string
}

const getUser = (obj:userInfo)=>{
    return obj.name + obj.age + obj.phone
}

getUser({
    name: 'poetry',
    age: 22,
    sex: 'male',
    phone: 891
})