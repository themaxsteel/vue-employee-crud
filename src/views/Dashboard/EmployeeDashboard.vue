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
  <div class="main-content">
    <p class="fs-4">Pegawai</p>
    <div class="row">
      <div class="col-6">
        <div class="px-3 py-2 border" style="background-color: #fcd60050;">
          <h5 class="mb-0">Perolehan Absensi</h5>
        </div>
        <div class="border border-bottom-0 border-top-0">

          <table v-if="store.attendanceTargetResult != null" class="w-100 table attendance-table">
            <thead>
              <tr>
                <th>#</th>
                <th class="text-center">Target Awal</th>
                <th class="text-center">Target</th>
                <th class="text-center">Pencapaian</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th class="align-middle">Hari Ini</th>
                <td class="text-center time">{{ store.originalTarget.today.toFixed(2) }} Jam <br>
                  ({{ store.originalTargetDuration.today }})</td>
                <td class="text-center time">{{ store.calculatedTarget.today.toFixed(2) }} Jam<br>
                  ({{ store.calculatedTargetDuration.today }})</td>
                <td :style="store.isNegative(store.total.today) ? 'color: red' : 'color: rgb(0, 197, 0)'"
                  class="text-center time">{{ store.total.today.toFixed(2) }} Jam<br>
                  ({{ store.totalDuration.today }})</td>
              </tr>
              <tr>
                <th class="align-middle">Minggu Ini</th>
                <td class="text-center time">{{ store.originalTarget.this_week.toFixed(2) }} Jam <br>
                  ({{ store.originalTargetDuration.this_week }})</td>
                <td class="text-center time">{{ store.calculatedTarget.this_week.toFixed(2) }} Jam<br>
                  ({{ store.calculatedTargetDuration.this_week }})</td>
                <td :style="store.isNegative(store.total.this_week) ? 'color: red' : 'color: rgb(0, 197, 0)'"
                  class="text-center time">{{ store.total.this_week.toFixed(2) }} Jam<br>
                  ({{ store.totalDuration.this_week }})</td>
              </tr>
              <tr>
                <th class="align-middle">Bulan Ini</th>
                <td class="text-center time">{{ store.originalTarget.this_month.toFixed(2) }} Jam <br>
                  ({{ store.originalTargetDuration.this_month }})</td>
                <td class="text-center time">{{ store.calculatedTarget.this_month.toFixed(2) }} Jam<br>
                  ({{ store.calculatedTargetDuration.this_month }})</td>
                <td :style="store.isNegative(store.total.this_month) ? 'color: red' : 'color: rgb(0, 197, 0)'"
                  class="text-center time">{{ store.total.this_month.toFixed(2) }} Jam<br>
                  ({{ store.totalDuration.this_month }})</td>
              </tr>
            </tbody>
          </table>
          <div v-else class="d-flex justify-content-center py-5">
            <div class="spinner-border" role="status">
              <span class="sr-only">Loading...</span>
            </div>
          </div>
        </div>

      </div>
      <div class="col-6">
        <div class="px-3 py-2" style="background-color: #fcd60050;">
          <h5 class="mb-0">Task list</h5>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { onMounted } from 'vue';
import { useEmployeeDashboardStore } from '../../stores/employee_dashboard';

const store = useEmployeeDashboardStore()

onMounted(() => {
  store.loadAttendanceTargetAndResult()
})
</script>