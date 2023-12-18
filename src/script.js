
 //1 Objetivos para criar uma  barra de progresso em etapas 

 
 //Obter os referências dos Elementos HTML
 const progress = document.getElementById('progress')
 const prev = document.getElementById('prev')
 const next = document.getElementById('next')
 const circles = document.querySelectorAll('.circle')
 
 // Inicializar a etapa ativa como 1
 let currentActive = 1

 // Adicionar ouvinte de evento para o botão "Próximo" 
 next.addEventListener ('click', () => {
    
    // Incrimentar a etapa ativa 
    currentActive++
     
     //Garantir que a etapa ativa não ultrapasse o número total de círculos
     if (currentActive > circles.length) {
     currentActive = circles.length
     }

  // Atualizar a interface
  update()
 })
 // Adicionar ouvinte de evento para o botão "Anterior"
 prev.addEventListener ('click', () => {
    
    // Decrementar a etapa ativa
    currentActive--
         
    // Garantir que a etapa ativa não seja menor que 1
    if (currentActive < 1) {
    currentActive = 1
    }
  // Atualizar a interface
  update()
})
 
 // Função para atualizar a interface com base na etapa ativa
 function update() {
    
    // Iterar sobre todos os círculos
    circles.forEach((circle, idx) =>{
        
        // Adicionar a classe 'active' aos círculos até a etapa atual 
        if(idx < currentActive) {
           circle.classList.add('active')
        } else {
            circle.classList.remove('active')
        }
    })
    // Obter todos os círculos ativos
    const actives = document.querySelectorAll('.active')

    // Ajustar a largura da barra de progresso com base na proporção de etapas 
    progress.style.width = (actives.length - 1) / (circles.length - 
    1) * 100 + '%'

    
    //Desabilitar o botão "Anterior" se a etapa atual for 1
    // Desabilitar o botão "Próximo" se a etapa atual for a última
    if(currentActive === 1) {
        prev.disabled = true
    } else if(currentActive === circles.length) {
        next.disabled = true
    } else {
        prev.disabled = false
        next.disabled = false
    }
 }
