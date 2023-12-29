<template>
    <div v-if="errors">
        <div
            v-for="(v, k) in errors"
            :key="k"
            class="bg-danger text-white rounded font-bold m-2 shadow-lg p-2"
        >
            <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
            </p>
        </div>
    </div>

    <div class="card w-25 m-auto">
        <p class="text-center text-black fw-medium p-2">Add Customer</p>
        <form @submit.prevent="saveCustomer">
            <div class="rounded-md shadow-sm">
                <div>
                    <label for="name" class="ms-2 fw-medium text-secondary"
                        >Name</label
                    >
                    <div class="m-2">
                        <input
                            type="text"
                            name="name"
                            id="name"
                            class="form-control"
                            v-model="form.name"
                        />
                    </div>
                </div>

                <div>
                    <label
                        for="phone_number"
                        class="ms-2 fw-medium text-secondary"
                        >Phone Number</label
                    >
                    <div class="m-2">
                        <input
                            type="text"
                            name="phoneNmber"
                            id="phone_number"
                            class="form-control"
                            v-model="form.phone_number"
                        />
                    </div>
                </div>

                <div>
                    <label for="address" class="ms-2 fw-medium text-secondary"
                        >Address</label
                    >
                    <div class="m-2">
                        <input
                            type="text"
                            name="address"
                            id="address"
                            class="form-control"
                            v-model="form.address"
                        />
                    </div>
                </div>

                <div>
                    <label for="score" class="ms-2 fw-medium text-secondary"
                        >Score</label
                    >
                    <div class="m-2">
                        <input
                            type="number"
                            name="score"
                            id="score"
                            class="form-control"
                            v-model="form.score"
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
                    Create
                </button>
            </div>
        </form>
    </div>
</template>

<script setup>
import useCustomers from "../../composables/customers";
import { reactive } from "vue";

const form = reactive({
    name: "",
    phone_number: "",
    address: "",
    score: 0,
});

const { errors, storeCustomer } = useCustomers();

const saveCustomer = async () => {
    const dateTime = new Date();
    await storeCustomer({
        ...form,
        registration_date: dateTime,
        created_at: dateTime,
        updated_at: dateTime,
    });
};
</script>
