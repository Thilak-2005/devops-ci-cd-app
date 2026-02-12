# Terraform EC2 DevOps Project

## Description
This Terraform project creates:

- EC2 instance (Amazon Linux 2)
- Security Group (Ports 22, 80, 3000)
- Docker auto installation using user_data
- Outputs for Public IP and Instance ID

## How to Run

terraform init
terraform plan
terraform apply -var="key_name=your-keypair-name"

## SSH Command

ssh -i your-keypair.pem ec2-user@<public-ip>
