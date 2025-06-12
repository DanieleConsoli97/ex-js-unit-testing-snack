const{getInitials,createSlug,average} = require("./function")



test('getInitials restituisce le iniziali di un nome completo',()=>{
    
    expect(getInitials('Daniele Consoli')).toBe('DC')

})

test('La funzione createSlug restituisce una stringa in lowercase.',()=>{
    expect(createSlug("Ciao Sono daniele")).toBe('ciao sono daniele')
})

test('La funzione average calcola la media aritmetica di un array di numeri.',()=>{
    expect(average([15,5,5])).toBe(8)
    expect(()=>average([15,"ciaoMOndo"])).toThrow()
})