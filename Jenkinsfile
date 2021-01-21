def getEnvFromBranch(branch) {
	if (branch == 'develop' || branch ==~ /feature\/.*/) {
		return 'dev'
	} else if (branch ==~ /release\/.*/ || branch ==~ /hotfix\/.*/) {
		return 'qua'
	} else if (branch == 'master') {
		return 'prd'
	} else {
		return null
	}
}

// THIS is the only place need to change between diferent projects (split by ",")
def getProjects(env){
	return "slct-$env"
}

def setCredentials(projects, workspace, saDir){
	def projectToIterate = projects.split("\\,");
	sh "echo all projects ${projectToIterate}"
	
	//Create SA directory
	dir("${workspace}"){
		sh "mkdir -p ${saDir}"
	}

	//get and fill SA for all projects
	for (int i = 0; i < projectToIterate.size(); i++) {
		def project = projectToIterate[i]
		def projectName = project.split("-")[0]
		sh "echo current project ${project}"
		withCredentials([file(credentialsId: project, variable: "GCP_SA_TEMP")]) {
			def saFilePath = "${saDir}/sa_${projectName}.json"
			dir("${workspace}"){
				sh "cat ${GCP_SA_TEMP} > ${saFilePath}"	
			}
		}
	}	
}

def deploy(projects, workspace, envName, saDir){
	def projectToIterate = projects.split("\\,");
	for (int i = 0; i < projectToIterate.size(); i++) {
		def project = projectToIterate[i]
		def projectName = project.split("-")[0]

		if(envName == 'prd'){
			timeout(time: 30, unit: "MINUTES") {
				input message: "Are you sure want to deploy from ${envName} on ${projectName}?", ok: "Yes"
			}
		}
		dir("${workspace}"){
			sh "echo Update SA project ${project}"
			def saFilePath = "${saDir}/sa_${projectName}.json"
			sh "./scripts/prepare.sh ${project} ${saFilePath} ${projectName}"
			//build after .envs update
			sh 'yarn build'

			sh "echo Deploying project from ${envName} on ${project}"
			sh 'yarn deploy'
		}

	}
}

pipeline {
    agent {
        dockerfile true
    }
    /*
	 * Setup environment variables for project and environment names.
	 */
	environment {
		ENV_NAME = getEnvFromBranch(env.BRANCH_NAME)
		GCP_PROJECT = getProjects(ENV_NAME)
		TARGET_WORKSPACE = "${env.WORKSPACE}/app"
		SA_DIR = "/tmp/keys"
		O365_URL = "xxx"//"https://outlook.office.com/webhook/fc6c6c45-ba33-493d-a18f-3a8eaf4ddc0a@7df72313-91ad-497c-aff0-6786830b8734/JenkinsCI/02067d6172914536a9fc01714b831f5c/9acf2004-4106-48da-8cab-c1bb95be98b3"
	}

    stages {
		/*
		 * Run yarn build script to compile the sdk
		 */
		stage('Running tests') {
			steps {
                //sh 'npx create-codeceptjs .'
                //sh 'codeceptjs run'
				//sh 'npm install'
                //sh 'npm install codeceptjs playwright --save'
                sh 'npx codeceptjs run --steps'
			}
		}
        stage('Run UI Test') {
			steps {
                sh 'npx codeceptjs run --steps'
			}
		}
    }
}