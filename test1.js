
let a = 'Poro'
let b = 'Porinho'

Deno.test("Teste do poro (NO API)", () => {
    if (a != "pori") {
        throw new Error(`${a} não é oi`);
    }
})

Deno.test("Não pode ser porinho (NO API)", () => {
    if (b == "pora") {
        throw new Error(`${a}  é Poro`);
    }
})
