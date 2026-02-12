
(Understanding this is key to CI/CD automation)

---

## 🛠️ Tech Stack & Tools Used

| Component | Technology |
|-----------|------------|
| CI/CD | Jenkins |
| Containerization | Docker |
| Cloud | AWS EC2, AWS ECR |
| Version Control | GitHub |
| Webhook | GitHub webhook |
| IaC | Terraform |
| OS | Ubuntu |

---

## 📸 Project Screenshots

### 🏗️ EC2 Instance Creation
![](EC2.png)

---

### 🔐 Security Group (SSH, HTTP, App Port)
![](security%20group.png)

---

### ☁️ Updating Packages on EC2
![](updateingpackagesonec2.png)

---

### ☕ Java Installation (Required by Jenkins)
![](javainstallonEc2.png)

---

### ⚙️ Installing Jenkins on EC2
![](installjenkinonec2.png)

---

### 🚀 Jenkins Running on EC2
![](jenkinesrunningonec2.png)

---

### 🔐 Jenkins Login Page
![](jenkineslogin.png)

---

### 🔑 Jenkins Admin Credentials
![](jenkineslogincredincials.png)

---

### 📦 Installing Jenkins Plugins
![](installjenkinesplugines.png)

---

### 🐳 Installing Docker on EC2
![](instaalingdockeronec2.png)

---

### 📦 AWS ECR Repository
![](ecr.png)

---

### 🔑 AWS Credentials Configured in Jenkins
![](awscredintials.png)

> Credentials stored in Jenkins credentials manager to allow ECR access.

---

### 🐙 GitHub Source Code
![](applicationcode.png)

---

### 🔗 GitHub Webhook Setup
![](githubweebhok.png)

---

### 🔔 Webhook Test Trigger
![](webhook.png)

---

### 📂 Pipeline Project Setup in Jenkins
![](piplineproject.png)

---

### 📜 Jenkinsfile (Pipeline Script)
![](jenkinesfile.png)

---

### ▶️ Jenkins Pipeline Execution
![](runningpipline.png)

---

### 🏃 Job Execution
![](runningjob.png)

---

### 📊 Jenkins Dashboard View
![](dasboardofjenkines.png)

---

### 🖥️ Console Output (Build Logs)
![](consoleoutput.png)

---

### 📑 Detailed Build Logs
![](consileoutput1.png)

---

### ❌ Failed Job (Debug View)
![](failedjob.png)

---

### ❌ Failed Dashboard View
![](failddasboard.png)

---

### 🔴 Error Output in Pipeline
![](errorwhilerunning.png)

---

### 🌐 Final Deployed Application Output
![](ouutputofapplication.png)

---

## 🔁 CI/CD Workflow Summary

1. Make code changes locally  
2. Push changes to GitHub  
3. GitHub Webhook triggers Jenkins  
4. Jenkins pulls code  
5. Builds Docker image  
6. Logs into AWS ECR  
7. Tags & pushes image to ECR  
8. (Optional) EC2 pulls image & runs container

---

## ⚙️ How to Test the Project

### 1️⃣ Clone this repo
```bash
git clone https://github.com/Thilak-2005/devops-ci-cd-app.git

