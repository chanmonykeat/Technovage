<template>
    <div class="d-flex flex-row">
        <div class="w-25 card">
            <div class="card m-3" style="background: var(--cui-teal)">
                <p class="text-center text-black fw-medium p-2">Users</p>
                <img src="user.png" class="m-auto" width="90px" alt="Image" />
                <p class="text-center text-black">Total: {{ users.length }}</p>
            </div>
            <div class="card m-3" style="background: var(--cui-teal)">
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
            <div class="card m-3" style="background: var(--cui-teal)">
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
        <div class="card w-75">
            <div class="d-flex m-2 flex-row">
                <div class="w-75">
                    <div class="mt-1 input-group w-75 input-group-lg">
                        <input
                            @input="onChange"
                            class="form-control"
                            placeholder="Search by name"
                        />
                    </div>
                </div>
                <div
                    class="p-2 w-25 m-auto text-center btn border bg-primary cursor-pointer hover:bg-info"
                >
                    <router-link
                        :to="{ name: 'customers.create' }"
                        class="btn fw-medium text-white"
                        >Create customer</router-link
                    >
                </div>
            </div>

            <div
                class="min-w-full overflow-hidden overflow-x align-middle sm:rounded-md"
            >
                <table class="w-100 table table-hover">
                    <thead class="bg-black">
                        <tr>
                            <th class="p-4 bg-black text-start">
                                <span class="fw-medium text-light uppercase"
                                    >Name</span
                                >
                            </th>
                            <th class="p-4 bg-black text-start">
                                <span class="fw-medium text-light uppercase"
                                    >Phone Number</span
                                >
                            </th>
                            <th class="p-4 bg-black text-start">
                                <span class="fw-medium text-light uppercase"
                                    >Address</span
                                >
                            </th>
                            <th class="p-4 bg-black text-start">
                                <span class="fw-medium text-light uppercase"
                                    >Score</span
                                >
                            </th>
                            <th class="p-4 bg-black text-center">
                                <span
                                    class="fw-medium text-end text-light uppercase"
                                    >Actions</span
                                >
                            </th>
                        </tr>
                    </thead>

                    <tbody
                        class="bg-white divide-y divide-gray-200 divide-solid"
                    >
                        <template v-for="item in customers" :key="item.id">
                            <tr class="bg-white">
                                <td
                                    class="p-4 text-sm leading-5 text-secondary whitespace-no-wrap"
                                >
                                    {{ item.name }}
                                </td>
                                <td
                                    class="p-4 text-sm leading-5 text-secondary whitespace-no-wrap"
                                >
                                    {{ item.phone_number }}
                                </td>
                                <td
                                    class="p-4 text-sm leading-5 text-secondary whitespace-no-wrap"
                                >
                                    {{ item.address || "N/A" }}
                                </td>
                                <td
                                    class="p-4 text-sm leading-5 text-secondary whitespace-no-wrap"
                                >
                                    {{ item.score }}
                                </td>
                                <td
                                    class="p-3 text-secondary whitespace-no-wrap"
                                >
                                    <router-link
                                        :to="{
                                            name: 'purchases.create',
                                            params: { customerId: item.id },
                                        }"
                                        class="w-50 btn m-auto text-white border border-transparent bg-secondary cursor-pointer"
                                        >Purchase</router-link
                                    >
                                    <router-link
                                        :to="{
                                            name: 'customers.edit',
                                            params: { id: item.id },
                                        }"
                                        class="w-50 btn m-auto text-white border border-transparent bg-secondary cursor-pointer"
                                        >Edit</router-link
                                    >
                                </td>
                            </tr>
                        </template>
                    </tbody>
                </table>
            </div>
        </div>
    </div>
</template>

<script setup>
import useCustomers from "@/composables/customers";
import useUsers from "@/composables/users";
import usePurchases from "@/composables/purchases";
import { onMounted } from "vue";

const { customers, getCustomers, getSearchCustomers } = useCustomers();
const { purchases, getPurchases } = usePurchases();
const { users, getUsers } = useUsers();
const onChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    getSearchCustomers(value);
};
onMounted(() => {
    getUsers();
    getCustomers();
    getPurchases();
});
</script>
