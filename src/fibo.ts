 export function fibo(n :number) : number {
    if(n < 2)
        return n
    return fibo(n-2) + fibo(n-1)
}