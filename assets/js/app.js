window.onload = function() {
  console.log('Hello World!');
  // ?
  const selectElement = document.getElementById('trimestre');
  selectElement.addEventListener('change', (event) => {
    const trimestreSelecionado = event.target.value;
    filterByTrimestre(trimestreSelecionado);
  });
};

document.addEventListener('DOMContentLoaded', function() {

const table = document.getElementById('tabela_notas');
const rows = table.getElementsByTagName('tr');

let totalEmitidas = 0;
let totalEmitidasSemCobranca = 0;
let totalVencidas = 0;
let totalAVencer = 0;
let totalPagas = 0;

for (let i = 1; i < rows.length; i++) {
  const columns = rows[i].getElementsByTagName('td');
  const valorNota = parseFloat(columns[5].textContent.replace(/R\$ /g, '')); 
  const statusNota = columns[8].textContent;

  if (statusNota === 'Pagamento realizado') {
    totalPagas += valorNota;
  } else if (statusNota === 'Pagamento em atraso') {
    totalVencidas += valorNota;
  } else if (statusNota === 'Emitida') {
    totalEmitidas += valorNota;
    totalEmitidasSemCobranca += valorNota;
  } else if (statusNota === 'Cobrança realizada') {
    totalEmitidas += valorNota;
  }
  if (statusNota !== 'Pagamento realizado') {
    totalAVencer += valorNota;
  }
}


const totalEmitidasElement = document.querySelector('.indicador-total-notas p');
totalEmitidasElement.textContent = `R$ ${totalEmitidas.toFixed(2)}`;

const totalEmitidasSemCobrancaElement = document.querySelector('.indicador-emitidas-sem-cobranca p');
totalEmitidasSemCobrancaElement.textContent = `R$ ${totalEmitidasSemCobranca.toFixed(2)}`;

const totalVencidasElement = document.querySelector('.indicador-vencidas p');
totalVencidasElement.textContent = `R$ ${totalVencidas.toFixed(2)}`;

const totalAVencerElement = document.querySelector('.indicador-a-vencer p');
totalAVencerElement.textContent = `R$ ${totalAVencer.toFixed(2)}`;

const totalPagasElement = document.querySelector('.indicador-pagas p');
totalPagasElement.textContent = `R$ ${totalPagas.toFixed(2)}`;
  
  });




function filterByTrimestre(quarter) {
  const tableBody = document.querySelector('#tabela_notas tbody');
  const rows = tableBody.getElementsByTagName('tr');

  for (let i = 0; i < rows.length; i++) {
    rows[i].style.display = 'none';
  }

  for (let i = 0; i < rows.length; i++) {
    const columns = rows[i].getElementsByTagName('td');
    const dataMonth = parseInt(columns[2].textContent.split('/')[1]);
    const quarterFromData = Math.ceil(dataMonth / 3);

    if (quarterFromData === parseInt(quarter)) {
      rows[i].style.display = '';
    }
  }
}