@echo off
docker compose down && docker system prune -a -f && docker volume prune -f && docker network prune -f && docker compose up
