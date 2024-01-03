<template>
    <div class="container text-center">
        <div class="row">
            <div class="card m-3 col bg-primary">
                <p class="text-center text-black fw-medium p-2">Users</p>
                <img src="user.png" class="m-auto" width="90px" alt="Image" />
                <p class="text-center text-black">Total: {{ users.length }}</p>
            </div>
            <div class="card m-3 col bg-info">
                <p class="text-center text-black fw-medium p-2">Customers</p>
                <img
                    src="customers.png"
                    class="m-auto"
                    width="90px"
                    alt="Image"
                />
                <p class="text-center text-black">
                    Total: {{ customers.length }}
                </p>
            </div>
            <div class="card m-3 col bg-warning">
                <p class="text-center text-black fw-medium p-2">Purchases</p>
                <img
                    src="purchase.jpg"
                    class="m-auto"
                    width="90px"
                    alt="Image"
                />
                <p class="text-center text-black">
                    Total: {{ purchases.length }}
                </p>
            </div>
        </div>
    </div>
</template>

<script setup>
import useCustomers from "@/composables/customers";
import useUsers from "@/composables/users";
import usePurchases from "@/composables/purchases";
import { onMounted } from "vue";

const { customers, getCustomers } = useCustomers();
const { purchases, getPurchases } = usePurchases();
const { users, getUsers } = useUsers();
onMounted(() => {
    getUsers();
    getCustomers();
    getPurchases();
});
</script>
