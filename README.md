# DevOps CI/CD Pipeline using Jenkins, Docker, AWS EC2 & ECR (with Terraform)

This project demonstrates a complete **CI/CD pipeline automation** using:

- GitHub
- Jenkins
- Docker
- AWS EC2
- AWS ECR
- Terraform (Infrastructure as Code)

Whenever code is pushed to GitHub, Jenkins automatically builds a Docker image and pushes it to AWS ECR.

---

# Architecture Overview

![](ArChitecture.png)

## Terraform Infrastructure Code
![](terraformcode.png)

Terraform is used to provision AWS infrastructure like EC2 and Security Groups.

---

# AWS Infrastructure Setup

## EC2 Instance Creation
![](EC2.png)

EC2 instance launched to host Jenkins and Docker.

---

## Security Group Configuration
![](security%20group.png)

Inbound rules configured for:
- SSH (22)
- HTTP (80)
- Jenkins (8080)
- Application Port

---

## Updating EC2 Packages
![](updateingpackagesonec2.png)

System packages updated before installing dependencies.

---

# Jenkins Installation & Setup

## Java Installation (Required for Jenkins)
![](javainstallonEc2.png)

---

## Installing Jenkins
![](installjenkinonec2.png)

---

## Jenkins Running on EC2
![](jenkinesrunningonec2.png)

---

## Jenkins Login Page
![](jenkineslogin.png)

---

## Jenkins Admin Credentials Setup
![](jenkineslogincredincials.png)

---

## Installing Required Jenkins Plugins
![](installjenkinesplugines.png)

---

# 🐳 Docker Installation

## Installing Docker on EC2
![](instaalingdockeronec2.png)

Docker is required to build and run containers.

---

# AWS ECR Setup

## AWS ECR Repository Created
![](ecr.png)

Private Docker registry for storing application images.

---

## AWS Credentials Configured in Jenkins
![](awscredintials.png)

IAM credentials stored securely inside Jenkins.

---

# Application & Source Code

## Application Source Code
![](applicationcode.png)

Node.js application stored in GitHub.

---

#  GitHub Webhook Integration

## GitHub Webhook Setup
![](githubweebhok.png)

Webhook triggers Jenkins automatically on every push.

---

## Webhook Testing
![](webhook.png)

Testing successful webhook delivery.

---

# Jenkins Pipeline Configuration

## Pipeline Project Creation
![](piplineproject.png)

---

## Jenkinsfile (Pipeline Script)
![](jenkinesfile.png)

Pipeline stages include:
- Clone Code
- Build Docker Image
- Login to ECR
- Tag Image
- Push to ECR

---

## Jenkins Pipeline Dashboard
![](dasboardofjenkines.png)

---

# Pipeline Execution

## Running Pipeline
![](runningpipline.png)

---

##  Running Job View
![](runningjob.png)

---

## Console Output Logs
![](consoleoutput.png)

---

## Detailed Console Logs
![](consileoutput1.png)

---

# Failure Debugging

## Failed Job
![](failedjob.png)

---

## Failed Dashboard
![](failddasboard.png)

---

## Error Output in Pipeline
![](errorwhilerunning.png)

---

# Final Application Output

## Deployed Application Running
![](ouutputofapplication.png)

Application successfully built, pushed to ECR, and deployed.

---

