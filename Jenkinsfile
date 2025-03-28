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
                    sh '''
                    # Check if the container exists
                    if [ "$(docker ps -aq -f name=node-api-container)" ]; then
                        # Stop and remove the existing container
                        docker stop node-api-container || true
                        docker rm node-api-container || true
                    fi

                    # Run the new container
                    docker run -d -p 3010:3010 --name node-api-container node-api:latest
                    '''
                }
            }
        }
    }
}
