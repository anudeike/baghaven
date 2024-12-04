<template>
    <v-app-bar :elevation="0" class="py-2">
        <template v-slot:prepend>
            <v-row class="align-center">
                <v-col cols="auto">
                    <v-icon icon="$vuetify" class="mx-4"></v-icon>
                    <v-btn variant="plain" class="mx-2" to="/">
                        Home
                    </v-btn>
                </v-col>
            </v-row>
        </template>

        <v-app-bar-title>
            <v-text-field label="try searching 'chroma rick and morty bag'" prepend-icon="mdi-magnify"
                variant="underlined" class="mt-3"></v-text-field>
        </v-app-bar-title>

        <template v-slot:append>
            <v-btn icon="mdi-image-search"></v-btn>

            <v-btn icon="mdi-dots-vertical"></v-btn>
        </template>
    </v-app-bar>
</template>