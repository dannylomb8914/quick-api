pipeline {
    agent { label 'trent' }

    environment {
        PATH = "/usr/local/bin:$PATH"
        IMAGE_NAME = "mine"
        TAG = "${BUILD_NUMBER}"
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
                    // Save full image name as global env var or local var
                    env.FULL_IMAGE = "${IMAGE_NAME}:${TAG}"
                    docker.build(env.FULL_IMAGE)
                }
            }
        }

        stage('Run Container') {
            steps {
                script {
                    sh """
                    # Check if the container exists
                    if [ "\$(docker ps -aq -f name=node-api-container)" ]; then
                        docker stop node-api-container || true
                        docker rm node-api-container || true
                    fi

                    # Run the new container
                    docker run -d -p 3011:3011 --name node-api-container \
                    --restart unless-stopped \
                    -v /tmp:/new \
                    ${env.FULL_IMAGE}
                    """
                }
            }
        }
    }
}
