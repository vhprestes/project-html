window.onload = function() {
  console.log('Hello World!');
};


/* TODO:
Cada nota ira conter:
Informações necessárias:
■ Nome do pagador;
■ Número de identificação da nota;
■ Data de emissão da nota;
■ Data da cobrança;
1
■ Data do pagamento;
■ Valor da nota;
■ Documento da nota fiscal;
■ Documento do boleto bancário;
■ Status da nota;
● Emitida;
● Cobrança realizada;
● Pagamento em atraso;

É necessario: Adicionar uma nota, fiultrar por mes de emissao, pelo mes que a cobrança foi realizada, pelo mes que o pagamento foi realizado, status da nota
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