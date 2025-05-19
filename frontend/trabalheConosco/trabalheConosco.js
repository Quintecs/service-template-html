// Atualiza o ano no footer
document.getElementById('current-year').textContent = new Date().getFullYear();

// Mostra nome do arquivo selecionado
document.getElementById('resume').addEventListener('change', function(e) {
    const fileName = e.target.files[0] ? e.target.files[0].name : 'Nenhum arquivo selecionado';
    document.querySelector('.file-name').textContent = fileName;
});

// Máscara para telefone
document.getElementById('phone').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 2) value = value.replace(/^(\d{2})(\d)/g, '($1) $2');
    if (value.length > 10) value = value.replace(/(\d{5})(\d)/, '$1-$2');
    e.target.value = value.substring(0, 15);
});

// Form submission
document.getElementById('careerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Simulação de envio - substitua por código real
    alert('Candidatura enviada com sucesso! Entraremos em contato em breve.');
    this.reset();
    document.querySelector('.file-name').textContent = 'Nenhum arquivo selecionado';
    
    // Código real para produção:
    /*
    const formData = new FormData(this);
    
    fetch('/enviar-candidatura', {
        method: 'POST',
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        if (data.success) {
            alert('Candidatura enviada com sucesso!');
            this.reset();
        } else {
            alert('Erro ao enviar candidatura. Tente novamente.');
        }
    });
    */
});