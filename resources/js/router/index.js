import { createRouter, createWebHistory } from 'vue-router'
 
import DashboardsIndex from './../components/dashboards/DashboardsIndex.vue'
import CustomersIndex from './../components/customers/CustomersIndex.vue'
import CustomersCreate from './../components/customers/CustomersCreate.vue'
import CustomersEdit from './../components/customers/CustomersEdit.vue'
import PurchasesIndex from './../components/purchases/PurchasesIndex.vue'
import PurchasesCreate from './../components/purchases/PurchasesCreate.vue'
import NotFound from './../components/NotFound.vue'
 
const routes = [
    {
        path: '/dashboard',
        name: 'dashboards.index',
        component: DashboardsIndex
    },
    {
        path: '/customers',
        name: 'customers.index',
        component: CustomersIndex
    },
    {
        path: '/customer/create',
        name: 'customers.create',
        component: CustomersCreate
    },
    {
        path: '/customer/:id/edit',
        name: 'customers.edit',
        component: CustomersEdit,
        props: true,
    },
    {
        path: '/purchase/:customerId/create',
        name: 'purchases.create',
        component: PurchasesCreate,
        props: true,
    },
    {
        path: '/purchases',
        name: 'purchases.index',
        component: PurchasesIndex
    },
    {
        path: '/:NotFound(.*)*',
        component: NotFound,
    },

];
 
export default createRouter({
    history: createWebHistory(),
    routes
})
