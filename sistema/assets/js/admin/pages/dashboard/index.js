const semanasRotulos = ["Semana 1", "Semana 2","Semana 3","Semana 4"];
const semanaDados = [10000, 12000, 11000, 13000];
const semanaCores = ["#008796b", "#0288d1", "#fbc02d", "#d32f2f"]

new Chart(document.getElementById("receitaSemanalGrafico"), {
    type: "bar",
    data: {
        labels: semanasRotulos,
        datasets: [{
            label:"Receita (R$)",
            data: semanaDados,
            //backgroundColor: "#00796b"
            backgroundColor: semanaCores
        }]
    },
    options: {
        scales: {
            y:{
                beginAtZero: true
            },
        },
        plugins: {
            legends: {
                display: false
            }
        }
    }
});

const pieLabels = ["Quartos", "Serviços", "Outros"]
const pieData = [70, 20, 10];

new Chart(document.getElementById("receitaGraficoPizza"), {
    type: "pie",
    data: {
        labels: pieLabels,
        datasets: [{
            data: pieData
        }]
    },
    optsions: {
        plugins: {
            legend: {
                positions: "bottom"
            }
        }
    }

});
