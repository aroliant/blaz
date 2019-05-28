echo "Removing all Image,Container,Volumes,Network and Services"

sudo docker stop $(docker ps -a -q)
echo "y" | sudo docker system prune -a
echo "y" | sudo docker volume prune

sudo systemctl daemon-reload
sudo systemctl restart docker.service

