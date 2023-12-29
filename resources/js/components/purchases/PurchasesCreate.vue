<template>
    <div v-if="errors">
        <div
            v-for="(v, k) in errors"
            :key="k"
            class="bg-red-400 text-white rounded font-bold mb-4 shadow-lg py-2 px-4 pr-0"
        >
            <p v-for="error in v" :key="error" class="text-sm">
                {{ error }}
            </p>
        </div>
    </div>

    <div class="card w-25 m-auto">
        <p class="text-center text-black fw-medium p-2">Add Purchase</p>
        <form class="space-y-6" @submit.prevent="saveCustomer">
            <div class="space-y-4 rounded-md shadow-sm">
                <div class="input-group mb-3">
                    <label for="amount" class="ms-2 fw-medium text-secondary"
                        >Amount</label
                    >
                    <div class="mt-3 mb-3 input-group">
                        <span class="input-group-text">$</span>
                        <input
                            type="number"
                            name="amount"
                            id="amount"
                            class="form-control"
                            v-model="form.amount"
                            required="true"
                        />
                        <span class="input-group-text">.00</span>
                    </div>
                </div>
            </div>

            <div class="d-flex flex-row-reverse">
                <button
                    type="submit"
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
import usePurchases from "../../composables/purchases";
import { reactive } from "vue";
import { onMounted } from "vue";
const props = defineProps({
    customerId: {
        required: true,
        type: String,
    },
});
const form = reactive({
    amount: 0,
});
const { updateCustomer, getCustomer, customer } = useCustomers();
const { errors, storePurchase } = usePurchases();
onMounted(() => getCustomer(parseInt(props.customerId)));
const saveCustomer = async () => {
    const dateTime = new Date();
    if (form.amount > 0) {
        await storePurchase({
            customerId: parseInt(props.customerId),
            amount: form.amount,
            createdAt: dateTime,
        });
        await updateCustomer({
            id: props.customerId,
            score:
                Math.floor(parseInt(form.amount / 10)) +
                customer._rawValue.score,
            updatedAt: dateTime,
        });
    }
};
</script>
