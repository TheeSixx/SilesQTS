const text = `{
    "Eai": "meu_bom_mano",
    "numbers": [5, 9, 7]
  }`;
  
  const data = JSON.parse(text);
  console.log(data.hello);
  console.log(data.numbers.length);

  const obj = {
    var: "Louco",
    numbers: [3, 8, 2],
  };
 
  const jsonificar = JSON.stringify(obj);
  console.log(jsonificar);
  
  
  const jsonificarpt2 = JSON.stringify(obj, null, 2);
  console.log(jsonificarpt2);
  