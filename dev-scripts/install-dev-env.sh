echo "Removing old version of docker"
sudo apt-get remove docker docker-engine docker.io containerd runc

echo "Updating APT Repo"
sudo apt-get update

echo "Configuring APT to use HTTPS"
sudo apt-get install -y \
    apt-transport-https \
    ca-certificates \
    curl \
    gnupg-agent \
    software-properties-common

echo "Adding Docker APT Key"
curl -fsSL https://download.docker.com/linux/ubuntu/gpg | sudo apt-key add -

echo "Adding Docker to APT Repository"
sudo add-apt-repository \
   "deb [arch=amd64] https://download.docker.com/linux/ubuntu \
   $(lsb_release -cs) \
   stable"

echo "Updating APT Index"
sudo apt-get update

echo "Install latest version of Docker CE"
sudo apt-get install -y docker-ce docker-ce-cli containerd.io

echo "Enabeling Docker engine API"

sudo mkdir /etc/systemd/system/docker.service.d

sudo touch /etc/systemd/system/docker.service.d/startup_options.conf

echo "# /etc/systemd/system/docker.service.d/override.conf\n[Service]\nExecStart=\nExecStart=/usr/bin/dockerd -H fd:// -H tcp://0.0.0.0:2376" > /etc/systemd/system/docker.service.d/startup_options.conf

echo "Reload Unit files"
sudo systemctl daemon-reload

echo "Restart docker daemon"
sudo systemctl restart docker.service

echo "Successfully restarted Docker Engine API and Running in port 2376 "

echo "Creating Docker Volume for Portainer"
sudo docker volume create portainer_data

echo "Running Portainer  at port 9000"
sudo docker run -d -p 9000:9000 -v /var/run/docker.sock:/var/run/docker.sock -v portainer_data:/data portainer/portainer
