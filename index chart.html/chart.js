<title>Pie Chart using JavaScript</title>

<link rel="stylesheet" href="style.css">

<script type="text/javascript" src="https://www.gstatic.com/charts/loader.js"></script>

//Paste the link without fail to load //

<body>

<script>

google.charts.load('current', { packages: ['corechart'] });

google.charts.setOnLoadCallback(drawChart);

var chart;

var data;

var options;

function drawChart() {

data google.visualization.arrayToDataTable([

'Brand',

'Market Share',

{ role: 'tooltip', type: 'string', p: { html: true } },

1,

['Python', 31.2, 'Python: 31.2%'],

['React JS', 29.0, 'React JS: 29.0%'],

['JS', 12.4, 'JS: 12.4%'], ['CSS3', 10.3, 'CSS3: 10.3%'],

['HTML', 8.5, 'HTML 8.5%'],

]);