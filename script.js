function pegarValor() {
    const form = document.getElementById('formulario')

    const input = document.querySelector('.input-contato').value; // ou document.getElementById('nomeInput')
    const textArea = document.querySelector('.textarea-contato').value;
    const telefone = '61998032785';

    const textoFormatado = `Olá Bruno, me chamo ${input},%0A${textArea}`;

    const url = `https://wa.me/${telefone}?text=${textoFormatado}`;

    window.open(url, '_blank');

    form.reset();
  }

