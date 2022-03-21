const labels = [
	'MEEKER AVENUE',
	'HOPE STREET',
	'MANHATTAN AVENUE',
	'GERRY STREET',
	'KEAP STREET',
	'KINGSLAND AVENUE',
	'POWERS STREET',
	'MESEROLE STREET',
	'MEADOW STREET',
	'GRAND STREET',
	'MCGUINNESS BOULEVARD',
	'WYTHE AVENUE',
	'SOUTH 2 STREET',
];

const data = {
	labels: labels,
	datasets: [{
		label: 'BK01 dataset',
		backgroundColor: [
			"#ff71c6",
			"#3e95cd", 
			"#8e5ea2",
			"#3cba9f",
			"#dd6888",
			"#e8c3b9",
			"#c45850",
			"#0d4b46",
			"#20279b",
			"#60c522",
			"#611c69",
			"#c2b464",
			"#042787",
		],
		data: [1,2,2,1,1,1,1,1,1,2,2,1,4],
	}]
};

const doughnutConfig = {
	type: 'doughnut',
	data: data,
	options: {
		plugins: {
			title: {
				display: true,
				text: 'BK01 311 Calls Street Names by Ada Maldonado',
			},
		},
	},
};

const barHorizontalConfig = {
	type: 'bar',
	data: data,
	options: {
		indexAxis: 'y',
		plugins: {
			title: {
				display: true,
				text: 'BK01 311 Calls Street Names by Ada Maldonado',
			},
		},
	},
};

const myDoughnutChart = new Chart(
	document.getElementById('myDoughnutChart'),
	doughnutConfig
);

const myBarChartHorizontal = new Chart(
	document.getElementById('myBarChartHorizontal'),
	barHorizontalConfig
);