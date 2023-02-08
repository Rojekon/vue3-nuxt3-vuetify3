<template>
  <div>
    <v-app>
      <v-main>
        <SideBar />
        <Table></Table>
        <InfoTab></InfoTab>
      </v-main>
    </v-app>
  </div>
</template>

<script setup>
import SideBar from "~~/components/SideBar.vue";
import Table from "~~/components/Table.vue";
import InfoTab from "~~/components/InfoTab.vue";
</script>
