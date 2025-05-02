// Form submission
document.getElementById('contactForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulação de envio - substitua por código real
    alert('Mensagem enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
    
    // Código real para produção:
    /*
    const formData = new FormData(this);
    
    fetch('/enviar-contato', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Mensagem enviada com sucesso!');
            this.reset();
        } else {
            alert('Erro ao enviar mensagem. Tente novamente.');
        }
    });
    */
});

// Phone mask
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    if (value.length > 10) value = value.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = value.substring(0, 15);
});