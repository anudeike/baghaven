<template>
    <v-container>
        <v-row>
            <v-col>
                <v-card class="pa-4">
                    <v-card-title primary-title class="text-center">
                        Create your first post!
                    </v-card-title>
                    <v-card-subtitle>
                        <div class="text-center">
                            Get Started by clicking the 'Image Search' button below <br> or simply select
                            the
                            '<v-icon>mdi-image-search</v-icon>' above!
                        </div>
                    </v-card-subtitle>
                    <v-card-actions class="justify-center">
                        <v-btn prepend-icon="mdi-image-search" variant="outlined" size="large" block to="/createPost">
                            Image Search
                        </v-btn>
                    </v-card-actions>
                </v-card>
            </v-col>
        </v-row>
    </v-container>
</template>