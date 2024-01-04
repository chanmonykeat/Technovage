import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useCustomers() {
  const customer = ref([])
  const customers = ref([])
  const cusNumber = ref('');

  const errors = ref('')
  const router = useRouter()

  const getCustomers = async () => {
    let response = await axios({
      url: 'http://localhost:8000/graphql',
      method: 'post',
      data: {
        query: `query{
                  customers
                    {
                      id
                      name
                      phone_number
                      address
                      score
                    }
                  }`
      }
    })
    customers.value = response.data.data.customers
  }

  const getSearchCustomers = async (name) => {
    let response = await axios({
      url: 'http://localhost:8000/graphql',
      method: 'post',
      data: {
        query: `query{
                  searchCustomerQuery(search: "${name}")
                    {
                      id
                      name
                      phone_number
                      address
                      score
                    }
                  }`
      }
    })
    const mSearchedCustomers = response.data.data.searchCustomerQuery
    mSearchedCustomers.map((cus) => {
      return { ...cus, id: btoa(cus.id)};
    })
      customers.value = mSearchedCustomers;
  }

    const getCustomer = async (id) => {
    let response = await axios({
      url: 'http://localhost:8000/graphql',
      method: 'post',
      data: {
        query: `query{
                  customer(id: ${id})
                    {
                      id
                      name
                      phone_number
                      address
                      score
                        purchases {
                          amount
                          created_at
                        }
                    }
                  }`
      }
    })
    customer.value = response.data.data.customer
    cusNumber.value = response.data.data.customer.phone_number
    }

  const padTo2Digits = (num) => {
  return num.toString().padStart(2, '0');
}

  const formatDate = (date) => {
  return (
    [
      date.getFullYear(),
      padTo2Digits(date.getMonth() + 1),
      padTo2Digits(date.getDate()),
    ].join('-') +
    ' ' +
    [
      padTo2Digits(date.getHours()),
      padTo2Digits(date.getMinutes()),
      padTo2Digits(date.getSeconds()),
    ].join(':')
  );
}
  const storeCustomer = async (data) => {
    errors.value = ''
    const {
      name,
      phone_number,
      address,
      score,
      registration_date,
      created_at,
      updated_at
    } = data;
    try {
      const response = await axios({
        url: 'http://localhost:8000/graphql',
        method: 'post',
        data: {
          query: `mutation{
                    createCustomer(
                    name: "${name}",
                    phone_number: "${phone_number}",
                    address: "${address}",
                    score: ${score},
                    registration_date: "${formatDate(registration_date)}",
                    created_at: "${formatDate(created_at)}",
                    updated_at: "${formatDate(updated_at)}"
                  )
                    {
                      name
                    }
                  }`
        }
      })
      if(!response.data.errors) {
          await router.push({ name: 'customers.index' })
      } else {
          errors.value = response.data.errors[0].extensions.validation;
      }
        } catch (e) {
          if (e.response.status === 422) {
            for (const key in e.response.data.errors) {
              errors.value = e.response.data.errors
            }
          }
        }

    }

    const updateCustomer = async (data = {}) => {
      errors.value = ''
      const { id , score } = !data.score ? customer._rawValue : data;
      let body= `id: "${id}",
                    name: "${customer._rawValue.name}",
                    address: "${customer._rawValue.address || ''}",
                    score: ${score},
                    updated_at: "${formatDate(new Date())}",
                  `
      if(customer._rawValue.phone_number !== cusNumber._rawValue) {
         body += `phone_number: "${customer._rawValue.phone_number}"`;
      }

      try {
        const response = await axios({
          url: 'http://localhost:8000/graphql',
          method: 'post',
          data: {
            query: `mutation{
                  updateCustomer(
                    ${body}
                  )
                    {
                      score
                    }
                  }`
          }
        })
      if(!response.data.errors) {
          await router.push({ name: 'customers.index' })
      } else {
          errors.value = response.data.errors[0].extensions.validation;
      }
      } catch (e) {
        console.log(e);
        if (e.response.status === 422) {
          for (const key in e.response.data.errors) {
            errors.value = e.response.data.errors
          }
        }
      }
    }

    return {
      errors,
      customer,
      customers,
      getCustomer,
      getSearchCustomers,
      getCustomers,
      storeCustomer,
      updateCustomer
    }
  }
