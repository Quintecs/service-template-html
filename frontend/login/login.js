// Alternar entre abas
function showTab(tabName) {
    document.querySelectorAll('.auth-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.querySelectorAll('.auth-form').forEach(form => {
        form.classList.add('hidden');
    });
    
    event.currentTarget.classList.add('active');
    document.getElementById(tabName + 'Form').classList.remove('hidden');
}

// Máscaras para os campos
document.getElementById('loginCpf').addEventListener('input', function(e) {
    this.value = formatCPF(this.value);
});

document.getElementById('registerCpf').addEventListener('input', function(e) {
    this.value = formatCPF(this.value);
});

document.getElementById('registerPhone').addEventListener('input', function(e) {
    this.value = formatPhone(this.value);
});

function formatCPF(cpf) {
    cpf = cpf.replace(/\D/g, '');
    if (cpf.length > 3) cpf = cpf.replace(/^(\d{3})(\d)/g, '$1.$2');
    if (cpf.length > 6) cpf = cpf.replace(/^(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3');
    if (cpf.length > 9) cpf = cpf.replace(/^(\d{3})\.(\d{3})\.(\d{3})(\d)/g, '$1.$2.$3-$4');
    return cpf.substring(0, 14);
}

function formatPhone(phone) {
    phone = phone.replace(/\D/g, '');
    if (phone.length > 2) phone = phone.replace(/^(\d{2})(\d)/g, '($1) $2');
    if (phone.length > 10) phone = phone.replace(/(\d{5})(\d)/, '$1-$2');
    return phone.substring(0, 15);
}

// Simulação de login
document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica
    const cpf = document.getElementById('loginCpf').value.replace(/\D/g, '');
    const password = document.getElementById('loginPassword').value;
    
    if (cpf.length !== 11) {
        alert('CPF inválido. Digite 11 números.');
        return;
    }
    
    if (password.length < 6) {
        alert('Senha deve ter pelo menos 6 caracteres.');
        return;
    }
    
    // Simular login bem-sucedido
    document.querySelector('.auth-container').classList.add('hidden');
    document.getElementById('mainApp').classList.remove('hidden');
    
    // Aqui você faria uma requisição AJAX para seu backend
    // fetch('/login', { method: 'POST', body: JSON.stringify({ cpf, password }) })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         document.querySelector('.auth-container').classList.add('hidden');
    //         document.getElementById('mainApp').classList.remove('hidden');
    //     } else {
    //         alert('CPF ou senha incorretos');
    //     }
    // });
});

// Simulação de cadastro
document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Validação básica
    const name = document.getElementById('registerName').value;
    const cpf = document.getElementById('registerCpf').value.replace(/\D/g, '');
    const email = document.getElementById('registerEmail').value;
    const phone = document.getElementById('registerPhone').value;
    const password = document.getElementById('registerPassword').value;
    const confirmPassword = document.getElementById('registerConfirmPassword').value;
    
    if (cpf.length !== 11) {
        alert('CPF inválido. Digite 11 números.');
        return;
    }
    
    if (password !== confirmPassword) {
        alert('As senhas não coincidem.');
        return;
    }
    
    if (password.length < 6) {
        alert('Senha deve ter pelo menos 6 caracteres.');
        return;
    }
    
    // Simular cadastro bem-sucedido
    alert('Cadastro realizado com sucesso! Faça login para continuar.');
    showTab('login');
    
    // Aqui você faria uma requisição AJAX para seu backend
    // fetch('/register', { 
    //     method: 'POST', 
    //     body: JSON.stringify({ name, cpf, email, phone, password }) 
    // })
    // .then(response => response.json())
    // .then(data => {
    //     if (data.success) {
    //         alert('Cadastro realizado com sucesso! Faça login para continuar.');
    //         showTab('login');
    //     } else {
    //         alert(data.message || 'Erro ao cadastrar');
    //     }
    // });
});