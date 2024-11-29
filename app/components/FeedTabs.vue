<template>
    <v-tabs v-model="tab" bg-color="transparent">
        <v-tab value="one">All</v-tab>
        <v-tab value="two">Newest Deals</v-tab>
        <v-tab value="three">Feed</v-tab>
    </v-tabs>

    <v-card-text>
        <v-tabs-window v-model="tab">
            <v-tabs-window-item value="one">
                <CreateFirstPostCTA />
            </v-tabs-window-item>

            <v-tabs-window-item value="two">
                <CreateFirstPostCTA />
            </v-tabs-window-item>

            <v-tabs-window-item value="three">
                <CreateFirstPostCTA />
            </v-tabs-window-item>
        </v-tabs-window>
    </v-card-text>
</template>

<script>
export default {
    data: () => ({
        tab: null,
    }),
}
</script>