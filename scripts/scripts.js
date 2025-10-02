  // =============================================
// LÓGICA DO BANNER DE COOKIES
// =============================================
document.addEventListener('DOMContentLoaded', () => {
    const banner = document.getElementById('cookie-banner');
    const acceptBtn = document.getElementById('accept-cookies-btn');

    // Verificação de segurança: só executa se o banner e o botão existirem na página.
    if (banner && acceptBtn) {
        
        // 1. Verifica no armazenamento local se os cookies já foram aceitos.
        if (!localStorage.getItem('cookiesAccepted')) {
            // Se não foram aceitos, adiciona a classe 'show' para exibir o banner.
            banner.classList.add('show');
        }

        // 2. Adiciona um "ouvinte" que espera pelo clique no botão de aceitar.
        acceptBtn.addEventListener('click', () => {
            // Quando o botão é clicado:
            // a. Salva a informação 'true' no armazenamento local.
            localStorage.setItem('cookiesAccepted', 'true');
            // b. Remove a classe 'show', fazendo o banner desaparecer via CSS.
            banner.classList.remove('show');
        });
    }
});

document.addEventListener('DOMContentLoaded', () => {

    
    const quickExitButton = document.getElementById('quick-exit');

   
    function performQuickExit() {
  
        window.location.replace('https://www.google.com.br');
    }


    quickExitButton.addEventListener('click', performQuickExit);
    
    document.addEventListener('keydown', (event) => {
        if (event.key === 'Escape') {
            performQuickExit();
        }
    });

});

// =============================================
// FUNCIONALIDADE DO BOTÃO "COPIAR TELEFONE"
// =============================================


document.addEventListener('DOMContentLoaded', () => {
    
    
    const allCopyButtons = document.querySelectorAll('.copy-btn');

    
    allCopyButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            const numberToCopy = button.dataset.number;

  
            navigator.clipboard.writeText(numberToCopy).then(() => {
                
                const originalText = button.textContent; 
                button.textContent = 'Copiado!'; 
                button.disabled = true; 

                
                setTimeout(() => {
                    button.textContent = originalText;
                    button.disabled = false;
                }, 2000);

            }).catch(err => {
               
                console.error('Falha ao copiar o número: ', err);
                alert('Não foi possível copiar o número.');
            });
        });
    });

});

function handleCusdisResize(event) {
    
    if (event.origin !== 'https://cusdis.com') {
        return; 
    }


    const data = event.data;
    if (data && data.type === 'cusdis:resize') {
      
        const newHeight = data.data.height;

    
        const cusdisIframe = document.querySelector('#cusdis_thread iframe');
    
        if (cusdisIframe) {
            cusdisIframe.style.height = newHeight + 'px';
            console.log('Altura do widget de comentários ajustada para: ' + newHeight + 'px');
        }
    }
}


window.addEventListener('message', handleCusdisResize);

