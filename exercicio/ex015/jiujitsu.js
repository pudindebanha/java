const finalizacoes = ['triângulo','armlock','kimura', 'omoplata', 'mata-leão', ];

for (let i = 0; i < finalizacoes.length; i++) {
  const tentativa = finalizacoes[i];
  
  console.log(`Tentando ${tentativa}...`);

  if (tentativa === 'omoplata') {
    console.log('Não encaixou, vou tentar outra.');
    continue; // pula pro próximo
  }

  if (tentativa === 'mata-leão') {
    console.log('Finalização encaixada! Vitória!');
    break; // termina o rola
  }

  console.log(`${tentativa} quase entrou, mas o adversário defendeu.`);
}
