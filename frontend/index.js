// Máscaras para os campos

document.getElementById('loan-amount').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = (value / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    e.target.value = value;
});

document.getElementById('income').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    value = (value / 100).toLocaleString('pt-BR', {
        style: 'currency',
        currency: 'BRL'
    });
    e.target.value = value;
});

document.getElementById('cpf').addEventListener('input', function(e) {
    let value = e.target.value.replace(/\D/g, '');
    if (value.length > 3) value = value.replace(/^(\d{3})(\d)/g, '$1.$2');
    if (value.length > 6) value = value.replace(/^(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3');
    if (value.length > 9) value = value.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3-$4');
    if (value.length > 14) value = value.substring(0, 14);
    e.target.value = value;
});

// Simulação e WhatsApp
document.getElementById('loan-form').addEventListener('submit', function(e) {
    e.preventDefault();
    
    const amount = parseFloat(document.getElementById('loan-amount').value.replace(/\D/g, '')) / 100;
    const term = document.getElementById('loan-term').value;
    const income = parseFloat(document.getElementById('income').value.replace(/\D/g, '')) / 100;
    const cpf = document.getElementById('cpf').value;
    
    if (!amount || !term || !income || !cpf) {
        alert('Por favor, preencha todos os campos corretamente.');
        return;
    }
    
    if (cpf.length !== 11 && cpf.length !== 14) {
        alert('CPF inválido. Digite 11 números.');
        return;
    }
    
    // Cálculo simples da parcela (juros fictícios de 4% ao mês)
    const monthlyRate = 0.04;
    const monthlyPayment = amount * monthlyRate * Math.pow(1 + monthlyRate, term) / (Math.pow(1 + monthlyRate, term) - 1);
    
    document.getElementById('monthly-payment').textContent = 'R$ ' + monthlyPayment.toFixed(2).replace('.', ',');
    document.getElementById('result-term').textContent = term;
    
    // Atualiza o link do WhatsApp com os dados do formulário
    const whatsappMsg = `Olá, gostaria de contratar um empréstimo de ${amount.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})} em ${term}x. Parcela estimada: ${monthlyPayment.toLocaleString('pt-BR', {style:'currency', currency:'BRL'})}`;
    const whatsappLink = `https://wa.me/+00(00)000000000?text=${encodeURIComponent(whatsappMsg)}`;
    document.getElementById('whatsapp-btn').href = whatsappLink;
    
    document.getElementById('result').style.display = 'block';
    window.scrollTo({
        top: document.getElementById('result').offsetTop,
        behavior: 'smooth'
    });
});
