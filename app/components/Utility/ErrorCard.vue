<template>
    <v-card class="ma-4" color="error" dark>
        <!-- Title or Heading -->
        <v-card-title>
            <span class="text-h6">{{ title }}</span>
        </v-card-title>

        <!-- Error Message -->
        <v-card-text>
            <div v-if="message">{{ message }}</div>
            <!-- Allow additional content from parent via slot -->
            <slot />
        </v-card-text>

        <!-- Actions (e.g., Dismiss button) -->
        <v-card-actions>
            <v-btn color="white" text @click="dismiss">
                Dismiss
            </v-btn>
        </v-card-actions>
    </v-card>
</template>

<script>
export default {
    name: 'ErrorCard',
    props: {
        title: {
            type: String,
            default: 'Error',
        },
        message: {
            type: String,
            default: 'Something went wrong.',
        },
    },
    methods: {
        dismiss() {
            // This could be anything you want: 
            // - Reset error state in Vuex
            // - Emit an event to remove/hide this component
            // - Navigate to another route, etc.
            this.$emit('dismiss');
        },
    },
};
</script>

<style scoped>
/* Add any scoped CSS for your card here if needed */
</style>