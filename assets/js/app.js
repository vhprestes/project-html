
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


 const months = ['Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun', 'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'];

window.onload = function() {
const table = document.getElementById('tabela_notas');
const rows = table.getElementsByTagName('tr');

const labels = [];
const dataInadimplencia = [];

for (let i = 1; i < rows.length; i++) { 
  const columns = rows[i].getElementsByTagName('td');
  const data = columns[2].textContent.split('/'); 
  const month = parseInt(data[1]);
  const status = columns[8].textContent; 

  labels.push(month);

  if (status === 'Pagamento em atraso') {
    dataInadimplencia.push(1);
  } else {
    dataInadimplencia.push(0);
  }
}

const ctx = document.getElementById('chart-inadimplencia').getContext('2d');

const data = {
  labels: months,
  datasets: [{
    label: 'Inadimplência',
    data: dataInadimplencia,
    backgroundColor: 'rgba(255, 99, 132, 0.2)',
    borderColor: 'rgb(255, 99, 132)',
    borderWidth: 1
  }]
};

const options = {
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true,
        max: 1, 
      }
    }],
    xAxes: [{
      ticks: {
        callback: function(value) {
          return months[value];
        }
      }
    }]
  }
};

const myChart = new Chart(ctx, {
  type: 'bar',
  data: data,
  options: options
});


const meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'];

const dados = [
  { mes: 'Janeiro', receita: 1000 },
  { mes: 'Fevereiro', receita: 3000 },
  { mes: 'Agosto', receita: 1300 },
  { mes: 'Outubro', receita: 2700 }
];

const receitas = meses.map(mes => {
  const dado = dados.find(d => d.mes === mes);
  return dado ? dado.receita : 0;
});

  
const ctx2 = document.getElementById('chart-receita').getContext('2d');
new Chart(ctx2, {
  type: 'line', // Pode ser 'bar' para um gráfico de barras
  data: {
    labels: meses,
    datasets: [{
      label: 'Evolução da Receita',
      data: receitas,
      borderColor: 'rgba(75, 192, 192, 1)', // Cor da linha
      borderWidth: 2,
    }]
  },
  options: {
    scales: {
      y: {
        beginAtZero: true,
        ticks: {
          callback: function (value) {
            return value; // Adicione o símbolo de moeda
          }
        }
      }
    }
  }
});


};



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



