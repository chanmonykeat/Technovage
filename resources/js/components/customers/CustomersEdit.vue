<template>
    <div v-if="errors">
        <div
            v-for="(v, k) in errors"
            :key="k"
            class="bg-danger text-white rounded font-bold mb-4 shadow-lg pt-2 pb-4 pe-0"
        >
            <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
            </p>
        </div>
    </div>

    <div class="card w-25 m-auto">
        <p class="text-center text-black fw-medium p-2">Edit Customer</p>
        <form v-on:submit.prevent="saveCustomer">
            <div class="rounded-md shadow-sm">
                <div>
                    <label for="name" class="ms-2 fw-medium text-secondary"
                        >Name</label
                    >
                    <div class="mt-1">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            v-model="customer.name"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="phone_number"
                        class="ms-2 fw-medium text-secondary"
                        >Phone Number</label
                    >
                    <div class="mt-1">
                        <input
                            type="text"
                            name="phone_number"
                            id="phone_number"
                            class="form-control"
                            v-model="customer.phone_number"
                        />
                    </div>
                </div>

                <div>
                    <label for="address" class="ms-2 fw-medium text-secondary"
                        >Address</label
                    >
                    <div class="mt-1">
                        <input
                            type="text"
                            name="address"
                            id="address"
                            class="form-control"
                            v-model="customer.address"
                        />
                    </div>
                </div>

                <div>
                    <label for="score" class="ms-2 fw-medium text-secondary"
                        >Score</label
                    >
                    <div class="mt-1">
                        <input
                            type="text"
                            name="score"
                            id="score"
                            class="form-control"
                            v-model="customer.score"
                            disabled="true"
                        />
                    </div>
                </div>
            </div>
            <div class="d-flex flex-row-reverse">
                <button
                    class="items-center p-2 m-2 fw-semibold text-white bg-secondary border btn"
                >
                    <router-link
                        :to="{ name: 'customers.index' }"
                        class="text-sm font-medium text-light"
                        >Cancel</router-link
                    >
                </button>
                <button
                    type="submit"
                    class="items-center p-2 m-2 fw-semibold text-white bg-success border btn"
                >
                    Save
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import useCustomers from "@/composables/customers";
import { onMounted } from "vue";

const { errors, customer, updateCustomer, getCustomer } = useCustomers();
const props = defineProps({
    id: {
        required: true,
        type: String,
    },
});

onMounted(() => getCustomer(props.id));

const saveCustomer = async () => {
    await updateCustomer({ id: props.id });
};
</script>
