let valores = [2,3,4,5,6]

const op = [
    (val)=>{
        res = 0 
        for(v of val){
            res+=v
        }
        return res
    },

    (val)=>{
        res = 1
        for(v of val){
            res*=v
        }
        return res
    },

    (val)=>{
        for(v of val){
            console.log(v)
        }
    }
]

console.log(op[2](valores))