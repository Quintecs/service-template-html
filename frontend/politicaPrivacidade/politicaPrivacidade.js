
// Atualiza a data e ano atual
document.addEventListener('DOMContentLoaded', function() {
    const now = new Date();
    const options = { day: '2-digit', month: 'long', year: 'numeric' };
    document.getElementById('current-date').textContent = now.toLocaleDateString('pt-BR', options);
    document.getElementById('current-year').textContent = now.getFullYear();
    
    // Botão de aceite
    const acceptBtn = document.getElementById('accept-btn');
    if (acceptBtn) {
        acceptBtn.addEventListener('click', function() {
            // Armazena o aceite no localStorage
            localStorage.setItem('privacyPolicyAccepted', 'true');
            alert('Obrigado por aceitar nossa Política de Privacidade!');
            // Redireciona para a página inicial
            window.location.href = '../index.html';
        });
    }
    
    // Verifica se já aceitou a política
    if (localStorage.getItem('privacyPolicyAccepted') === 'true') {
        acceptBtn.textContent = 'Política já aceita';
        acceptBtn.style.backgroundColor = '#28a745';
        acceptBtn.style.cursor = 'default';
        acceptBtn.onclick = null;
    }
});
