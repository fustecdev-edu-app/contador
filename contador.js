    // ✅ Configure aqui a data de início
    const dataInicio = new Date("2025-04-27");

    // Função que calcula os dias desde a data de início
    function diasDesdeInicio() {
      const agora = new Date();
      const diffMs = agora - dataInicio;
      return Math.floor(diffMs / (1000 * 60 * 60 * 24));
    }

    // Atualiza o contador no HTML
    function atualizarContador() {
      document.getElementById('conta').textContent = diasDesdeInicio();
    }

    // Chama imediatamente e depois atualiza a cada hora
    atualizarContador();
    setInterval(atualizarContador, 1000 * 60 * 60);
