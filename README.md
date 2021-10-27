## construis le container
docker build -t simple-game .

## lance le container
docker run --rm -d  -p 3000:3000/tcp simple-game:latest

## ce connecte au URL
http://localhost:3000/
