<style>
.attendance-table .time {
  color: rgb(0, 197, 0);
  font-weight: 700;
}

.attendance-table td {
  padding: 20px 15px;
}
</style>
<template>
  <EmployeeDashboard v-if="user.access_level == 'PEGAWAI'"/>
  
</template>

<script setup>
import { getUser} from '../utils/utils'
import EmployeeDashboard from './Dashboard/EmployeeDashboard.vue'

const user = getUser()

</script>