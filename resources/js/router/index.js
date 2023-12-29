import { createRouter, createWebHistory } from 'vue-router'
 
import CustomersIndex from './../components/customers/CustomersIndex.vue'
import CustomersCreate from './../components/customers/CustomersCreate.vue'
import CustomersEdit from './../components/customers/CustomersEdit.vue'
import PurchasesCreate from './../components/purchases/PurchasesCreate.vue'
import NotFound from './../components/NotFound.vue'
 
const routes = [
    {
        path: '/dashboard',
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
        path: '/:NotFount(.*)*',
        component: NotFound,
    },

];
 
export default createRouter({
    history: createWebHistory(),
    routes
})
