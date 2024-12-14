<template>
    <div>
        <h1>Search Results</h1>
        <p>{{ data }}</p>
        <p>Status: {{ status }}</p>
        <p v-if="error">An error occurred: {{ error.message }}</p>
        <v-btn @click="refresh">Refresh</v-btn>
        <v-btn @click="clear">Clear</v-btn>

    </div>
</template>

<script setup lang="ts">
const { data, status, error, refresh, clear } = await useAsyncData(
    'products',
    () => $fetch('http://127.0.0.1:8000/api/test', {
        method: 'POST',
        body: {
            query: 'studio ghibli minibag',
            pages: 9
        }
    })
)
</script>