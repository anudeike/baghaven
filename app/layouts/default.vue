<template>
  <v-app>
    <AppHeader />
    <v-main>
      <v-container fluid>
        <slot />
      </v-container>
    </v-main>
    <AppFooter />
  </v-app>
</template>
