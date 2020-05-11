pipeline {
    agent {
        label "master"
    }

    stages {
        stage ("install") {
            steps {
                echo "npm install"
                bat "npm install"
            }
        }

        stage ("DEV build") {
            steps {
                echo "DEV build"
                bat "./frontend/library/scripts/build.bat"
            }
        }

        stage ("Lint") {
            steps {
                echo "Lint"
                bat "./frontend/library/scripts/lint.bat"
            }
        }

        stage ("Unit test") {
            steps {
                echo "Unit test"
                bat "./frontend/library/scripts/test.bat"
            }
        }
    }
}