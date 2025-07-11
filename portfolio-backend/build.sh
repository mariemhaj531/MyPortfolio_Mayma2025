#!/usr/bin/env bash

# Installer les dépendances
composer install --no-dev --optimize-autoloader

# Générer la clé d’application
if [ ! -f bootstrap/cache/config.php ]; then
  php artisan config:clear
  php artisan key:generate
fi

# Lancer les migrations 
php artisan migrate --force
