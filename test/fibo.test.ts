import { fibo } from '../src/fibo';
describe("Fibonnaci TU", () => {
    it("should return 0 when input = 0", () => {
        expect(fibo(0)).toBe(0)
    })

    it("should return 1 when input = 1", () => {
        expect(fibo(1)).toBe(1)
    })

    it("should return 2 when input = 1", () => {
        expect(fibo(2)).toBe(1)
    })
    
    it("should return 3 when input = 2", () => {
        expect(fibo(3)).toBe(2)
    })
})