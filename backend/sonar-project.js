import scanner from 'sonarqube-scanner'

scanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.projectName': 'Backend ML',
      'sonar.projectDescription': 'Consultas a la api de Mercado Libre',
      'sonar.sources': 'src'
    }
  },
  () => process.exit()
)
