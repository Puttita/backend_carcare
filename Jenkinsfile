node{
   def git_last_hash = ""
   stage('pull source project'){
      git credentialsId: 'username-password-gitlab-bom43531', branch: 'develop', url: 'https://gitlab.com/face-recognition-cpc-finalproject/face-manage-backend.git'
   }

   stage('get git last hash'){
      git_last_hash = sh(returnStdout: true, script: 'git rev-parse HEAD | cut -c1-8').trim()
   }

   stage('unit test'){
      def unit = docker.image('face-backend:latest')

      unit.inside('-e "NODE_ENV=test"'){
	sh 'cp -r /app/node_modules .'
        sh 'sequelize-cli db:migrate:undo:all' 
        sh 'sequelize-cli db:migrate'
        sh 'sequelize-cli db:seed:all'
        sh 'npm run test'
      }
   }

   stage('define version'){
	sh "mv config.json config.tmp"
        sh "sed 's/REPLACE_GIT_LAST_HASH/$git_last_hash/g' config.tmp > config.json"
   }

   stage('build production'){
	docker.withRegistry('https://registry.gitlab.com/face-recognition-cpc-finalproject/face-manage-backend', 'username-password-gitlab-bom43531'){
	   def build_image = docker.build("registry.gitlab.com/face-recognition-cpc-finalproject/face-manage-backend:$git_last_hash", "-f cicd/Dockerfile.prod .")
	   build_image.push()
	}
   }
   
   stage('deploy'){
	sh "sed 's/REPLACE_GIT_LAST_HASH/$git_last_hash/g' cicd/docker-compose.base > cicd/docker-compose.yml"
	sh "scp ./cicd/docker-compose.yml ubuntu@18.136.212.248:~/heimdall/backend/docker-compose.yml"
	sh 'ssh ubuntu@18.136.212.248  "cd ~/heimdall/backend; docker-compose down || true; docker-compose up -d"'
   }

   stage('deploy database'){
	def unit = docker.image('face-backend:latest')

	unit.inside('-e "NODE_ENV=deploy"'){
	  sh 'sequelize-cli db:migrate:undo:all'
	  sh 'sequelize-cli db:migrate'
	  sh 'sequelize-cli db:seed:all'
	}
   }
}
