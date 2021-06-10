<template>
    <div>
<Fullcalendar :plugins="calendarPlugins" />
    </div>
</template>

<script>
import Fullcalendar from '@fullcalendar/vue'
import DayGridPlugin from '@fullcalendar/daygrid'
import TimeGridPlugin from '@fullcalendar/timegrid'
import InteractionPlugin from '@fullcalendar/interaction'
import ListPlugin from '@fullcalendar/list'

export default {
    name: 'Agenda',
 data: () => ({
     calendarPlugins: [
         DayGridPlugin,
          TimeGridPlugin,
          TimeGridPlugin,
          InteractionPlugin,
          ListPlugin
     ]
     }),
         components:
         {
             Fullcalendar},
}
</script>