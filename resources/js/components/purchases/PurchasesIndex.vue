<template>
  <div class="d-flex flex-row" style="max-height: 450px;min-height: 450px;">
        <div class="w-25 card">
                    <div class="p-1 input-group w-100 input-group-lg">
                        <input
                            @input="onChange"
                            class="form-control"
                            placeholder="Search"
                        />
                    </div>
                      <hr>
                    <div>
                      <ul class="list-group" style="position: sticky;top: 0;">
                        <li class="list-group-item" @click="onClick" v-bind:class="{'active': !byAll}" id="0">All</li>
                      </ul>
                      <div class="overflow-y-auto">
                      <ul v-for="item in customers" :key="item.id" class="list-group">
                        <li class="list-group-item" v-bind:class="{'active': item.id == byAll}" @click="onClick" :id="item.id" >
                          <div class="ms-2 me-auto" :id="item.id">
                            <div class="fw-bold" :id="item.id">{{ item.name }} </div>
                          {{ item.phone_number }}
                          </div>
                        </li>
                      </ul>
                      </div>
                    </div>
        </div>
        <div class="card w-75">
            <div
                class="min-w-full overflow-y-auto overflow-y align-middle sm:rounded-md"
            >
                <table class="w-100 table table-hover">
                    <thead class="bg-secondary" style="position: sticky; top:0;">
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
                                    >Amount</span
                                >
                            </th>
                            <th class="p-4 bg-secondary text-start">
                                <span class="fw-medium text-light uppercase"
                                    >Purchased Date</span
                                >
                            </th>
                        </tr>
                    </thead>

                    <tbody
                        class="bg-white divide-y divide-gray-200 divide-solid"
                    >
                    <template v-if="!byAll" v-for="item in purchases" :key="item.id">
                            <tr class="bg-white">
                                <td
                                    class="p-4 text-sm leading-5 text-secondary whitespace-no-wrap"
                                >
                                    {{ item.customer.name }}
                                </td>
                                <td
                                    class="p-4 text-sm leading-5 text-secondary whitespace-no-wrap"
                                >
                                    {{ item.customer.phone_number }}
                                </td>
                                <td
                                    class="p-4 text-sm leading-5 text-secondary whitespace-no-wrap"
                                >
                                    {{ item.amount }}
                                </td>
                                <td
                                    class="p-4 text-sm leading-5 text-secondary whitespace-no-wrap"
                                >
                                    {{ item.created_at }}
                                </td>
                            </tr>
                        </template>
                    <template v-else v-for="item in customer.purchases" :key="Math.random()">
                            <tr class="bg-white">
                                <td
                                    class="p-4 text-sm leading-5 text-secondary whitespace-no-wrap"
                                >
                                    {{ customer.name }}
                                </td>
                                <td
                                    class="p-4 text-sm leading-5 text-secondary whitespace-no-wrap"
                                >
                                    {{ customer.phone_number }}
                                </td>
                                <td
                                    class="p-4 text-sm leading-5 text-secondary whitespace-no-wrap"
                                >
                                    {{ item.amount }}
                                </td>
                                <td
                                    class="p-4 text-sm leading-5 text-secondary whitespace-no-wrap"
                                >
                                    {{ item.created_at }}
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

const { customers, getCustomers, getSearchCustomers, customer, getCustomer } = useCustomers();
const { purchases, getPurchases, setById, byAll } = usePurchases();
const { users, getUsers } = useUsers();
const onChange = (e) => {
    e.preventDefault();
    const { value } = e.target;
    getSearchCustomers(value);
};

const onClick = (e) => {
    e.preventDefault();
    const { id } = e.target;
    const pId = parseInt(id);
    setById(pId)
    pId && getCustomer(pId)
    && getCustomers();
};
onMounted(() => {
    getCustomers();
    getPurchases();
});
</script>
