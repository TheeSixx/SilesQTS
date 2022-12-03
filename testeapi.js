import {
    assertEquals,
    assertStringIncludes,
    assertArrayIncludes,
} from "http://deno.land/std/testing/asserts.ts"

let aluno = 'Siles foda'
let professores = ['João', 'Lais', 'Davi', 'Bruno Aparecido Cano']

Deno.test("Teste de assertions (API)", () => {
    assertEquals(aluno, "Siles"); 
    assertStringIncludes(aluno, "foda");    
})

Deno.test("Testando array do professor (API)", ()=> {
    assertArrayIncludes(professores, 
        ["Davi", "Lais", "Alan"],
        "Opa! Algo deu errado!");
})