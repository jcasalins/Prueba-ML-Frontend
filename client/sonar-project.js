import scanner from 'sonarqube-scanner'

scanner(
  {
    serverUrl: 'http://localhost:9000',
    options: {
      'sonar.projectName': 'Client ML',
      'sonar.projectDescription': 'Frontend de la app de Mercado Libre',
      'sonar.sources': 'src'
    }
  },
  () => process.exit()
)
