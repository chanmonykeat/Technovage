## About Technovage Test
This Test project is a web application using Laravel 10 framework with Vue3, CoreUI, Lighthouse-php:

- [Laravel](https://laravel.com/docs/10.x/documentation).
- [Vue3](https://vuejs.org/guide/introduction.html).
- [CoreUI](https://coreui.io/bootstrap/docs/getting-started/introduction/) 
- [Lighthouse](https://lighthouse-php.com/6/getting-started/installation.html).
- [MariaDB](https://mariadb.org/download/?t=mariadb&o=true&p=mariadb&r=10.3.38&os=windows&cpu=x86_64&pkg=msi).

This test project is has function like
- Authorization (All route protected)
- Customer (Add, Edit, List, SearchListing)
- Purchase (base on Customer)
- Dashboard data (total users, total customers, total purchases)

### Stacks Version

- Composer 2.6.6
- Node 18.19.0
- Sql  Ver 15.1 Distrib 10.3.38-MariaDB
- Laravel 10
- Vue3
- CoreUI 4.*
- Lighthouse 6.*

### Instructions

- Clone this repository
- Config database in .env
- Composer Install
- Npm install
- Php artisan serve to start the server for laravel
- Npm run dev or npm run build for vue
- Go to http://localhost:8000 (default)

