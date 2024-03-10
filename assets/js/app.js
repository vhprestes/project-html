window.onload = function() {
  console.log('Hello World!');
};


/* TODO:
  1. Adicionar um evento de click no botão de adicionar nota
  2. Ao clicar no botão de adicionar nota, abrir um modal com um formulário para adicionar uma nova nota
  3. Adicionar um evento de click no botão de salvar nota
  4. Ao clicar no botão de salvar nota, pegar os valores dos inputs e adicionar uma nova linha na tabela de notas
  5. As notas serão persistidas no localStorage
  6. As funções de filtragem estão muito parecidas, talvez não seja necessário repetir tanto código
*/

const monthEmissaoSelected = document.getElementById('month-emission');


monthEmissaoSelected.addEventListener('change', function() {
  const value = this.value;
  console.log('Mês selecionado: ', value);
  filterEmissao(value);
});

function filterEmissao(month) {
  const table = document.getElementsByClassName('table-notas')[0];
  const rows = table.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const columns = row.getElementsByTagName('td');
    const column = columns[2];
    if (column) {
      const text = column.textContent || column.innerText;
      const monthFromText = text.split('/')[1];
      if (monthFromText == month) {
      } else {
        row.style.display = 'none';
      }
    }
  }
}

const monthCobrancaSelected = document.getElementById('month-charge');

monthCobrancaSelected.addEventListener('change', function() {
  const value = this.value;
  console.log('Mês de cobrança: ', value);
  filterCobranca(value);
}
);

function filterCobranca(month) {
  const table = document.getElementsByClassName('table-notas')[0];
  const rows = table.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const columns = row.getElementsByTagName('td');
    const column = columns[3];
    if (column) {
      const text = column.textContent || column.innerText;
      const monthFromText = text.split('/')[1];
      if (monthFromText == month) {
      } else {
        row.style.display = 'none';
      }
    }
  }
}

const paymentMonth = document.getElementById('month-payment');
paymentMonth.addEventListener('change', function() {
  const value = this.value;
  console.log('Mês de pagamento: ', value);
  filterPayment(value);
});

function filterPayment(month) {
  const table = document.getElementsByClassName('table-notas')[0];
  const rows = table.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const columns = row.getElementsByTagName('td');
    const column = columns[4];
    if (column) {
      const text = column.textContent || column.innerText;
      const monthFromText = text.split('/')[1];
      if (monthFromText == month) {
      } else {
        row.style.display = 'none';
      }
    }
  }
}


const statusSelected = document.getElementById('status');
statusSelected.addEventListener('change', function() {
  const value = this.value;
  console.log('Status selecionado: ', value);
  filterStatus(value);
});

function filterStatus(status) {
  const table = document.getElementsByClassName('table-notas')[0];
  const rows = table.getElementsByTagName('tr');
  for (let i = 0; i < rows.length; i++) {
    const row = rows[i];
    const columns = row.getElementsByTagName('td');
    const column = columns[8];
    if (column) {
      const text = column.textContent || column.innerText;
      console.log('Status: ', text, status)
      if (text === status) {
      } else {
        row.style.display = 'none';
      }
    }
  }
}