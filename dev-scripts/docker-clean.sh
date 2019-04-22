echo "Removing all Image,Container,Volumes,Network and Services"

sudo docker stop $(docker ps -a -q)
echo "y" | sudo docker system prune -a
echo "y" | sudo docker volume prune

echo "Removing Docker Engine API"
sudo rm /etc/systemd/system/docker.service.d/startup_options.conf
sudo rmdir /etc/systemd/system/docker.service.d

sudo systemctl daemon-reload
sudo systemctl restart docker.service

