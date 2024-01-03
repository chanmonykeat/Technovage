<template>
    <div class="d-flex flex-row" style="max-height: 450px;min-height: 450px;">
        <div class="card w-100">
            <div class="d-flex m-2 flex-row">
                <div class="w-75">
                    <div class="mt-1 input-group w-75 input-group-lg">
                        <input
                            @input="onChange"
                            class="form-control"
                            placeholder="Search"
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
                class="min-w-full overflow-y-auto overflow-x align-middle sm:rounded-md"
            >
                <table class="w-100 table table-hover">
                    <thead class="bg-secondary">
                        <tr>
                            <th class="p-4 bg-secondary text-start">
                                <span class="fw-medium text-light uppercase"
                                    >Name</span
                                >
                            </th>
                            <th class="p-4 bg-secondary text-start">
                                <span class="fw-medium text-light uppercase"
                                    >Phone Number</span
                                >
                            </th>
                            <th class="p-4 bg-secondary text-start">
                                <span class="fw-medium text-light uppercase"
                                    >Address</span
                                >
                            </th>
                            <th class="p-4 bg-secondary text-start">
                                <span class="fw-medium text-light uppercase"
                                    >Score</span
                                >
                            </th>
                            <th class="p-4 bg-secondary text-center">
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
                                        class="w-50 btn m-auto text-black border border-transparent bg-light cursor-pointer"
                                        >Purchase</router-link
                                    >
                                    <router-link
                                        :to="{
                                            name: 'customers.edit',
                                            params: { id: item.id },
                                        }"
                                        class="w-50 btn m-auto text-white border border-transparent bg-info cursor-pointer"
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
import { onMounted } from "vue";

const { customers, getCustomers, getSearchCustomers } = useCustomers();
const onChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    getSearchCustomers(value);
};
onMounted(() => {
    getCustomers();
});
</script>
