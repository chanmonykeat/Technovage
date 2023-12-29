import { ref } from 'vue'
import axios from 'axios'
import { useRouter } from 'vue-router'

export default function useCustomers() {
  const user = ref([])
  const users = ref([])

  const errors = ref('')
  const router = useRouter()

  const getUsers = async () => {
    let response = await axios({
      url: 'http://localhost:8000/graphql',
      method: 'post',
      data: {
        query: `query{
                  users
                    {
                      id
                    }
                  }`
      }
    })
    users.value = response.data.data.users
  }
      return {
      errors,
      users,
      getUsers,
    }
}
