branch=$(git branch | sed -n -e 's/^\* \(.*\)/\1/p')
echo "BLAZ_IMAGE_TAG=$branch" > server/env