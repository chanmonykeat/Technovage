import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function usePurchases() {
  const purchase = ref([])
  const purchases = ref([])

  const errors = ref('')
  const router = useRouter()

  const getPurchases = async () => {
    let response = await axios({
      url: 'http://localhost:8000/graphql',
      method: 'post',
      data: {
        query: `query{
                  purchases
                    {
                      id
                    }
                  }`
      }
    })
    purchases.value = response.data.data.purchases
  }

  /*
    const getPurchase = async (id) => {
        let response = await axios.get(`/api/purchases/${id}`)
        purchase.value = response.data.data
    }

*/
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
  const storePurchase = async (data) => {
    errors.value = ''
    const {
      customerId,
      amount,
      createdAt,
    } = data;
    try {
      await axios({
        url: 'http://localhost:8000/graphql',
        method: 'post',
        data: {
          query: `mutation{
                    createPurchase(
                    customer_id: ${customerId},
                    amount: ${amount},
                    created_at: "${formatDate(createdAt)}",
                  )
                    {
                      amount
                    }
                  }`
        }
      })
          //await router.push({ name: 'customers.index' })
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
      purchase,
      purchases,
      getPurchases,
      storePurchase,
    }
}
