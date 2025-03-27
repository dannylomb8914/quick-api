pipeline {
    agent any
    environment {
        PATH = "/usr/local/bin:$PATH"  // Add Docker's installation path
    }

    stages {
        stage('Checkout Code') {
            steps {
                checkout scm
            }
        }

        stage('Build Docker Image') {
            steps {
                script {
                    sh "docker build -t node-api:latest ."
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh "docker run -d -p 3010:3010 --name node-api-container node-api:latest"
                }
            }
        }
    }
}
