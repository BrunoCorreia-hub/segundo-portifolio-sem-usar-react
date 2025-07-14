function pegarValor() {
    const form = document.getElementById('formulario')
    const mensagem = document.getElementById('mensagem-erro')

    const input = document.querySelector('.input-contato').value; // ou document.getElementById('nomeInput')
    const textArea = document.querySelector('.textarea-contato').value;
    const telefone = '61998032785';

    if(input === '' || textArea === ''){
      mensagem.textContent = "Por favor, preencha os campos antes de enviar";
      return
    } else {
      mensagem.textContent = '';
    }

    const textoFormatado = `Olá Bruno, me chamo ${input},%0A${textArea}`;

    const url = `https://wa.me/${telefone}?text=${textoFormatado}`;

    window.open(url, '_blank');

    form.reset();
  }

