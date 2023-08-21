import Highcharts from 'highcharts/highstock'
import HighchartsReact from 'highcharts-react-official'

const options = {
  title: {
    text: 'Gráfico'
  },
  series: [{
    data: [11, 2, 43, 14, 5, 61, 100, 3, 55]
  }]
}

const Grafico = () => <HighchartsReact
  highcharts={Highcharts}
  constructorType={'stockChart'}
  options={options}
/>

export default Grafico