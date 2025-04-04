pipeline {
    agent { label 'trent'}
    environment {
        PATH = "/usr/local/bin:$PATH"  // Add Docker's installation path
        IMAGE_NAME = "mine"
        TAG = "${BUILD_NUMBER}" // or use GIT_COMMIT, BUILD_ID, etc.
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
                    sh "docker build -t node-api:latest ." docker.build("${IMAGE_NAME}:${TAG}")
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
                    docker run -d -p 3011:3011 --name node-api-container \
                    --restart unless-stopped \
                    -v /tmp:/new \
                    ${IMAGE_NAME}:${TAG}
                    '''
                }
            }
        }
    }
}
