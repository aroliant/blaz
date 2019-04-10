echo "Remove All Unused Image,Container,Volumes and Network"

sudo docker stop $(docker ps -a -q)
echo "y" | sudo docker system prune -a
echo "y" | sudo docker volume prune
