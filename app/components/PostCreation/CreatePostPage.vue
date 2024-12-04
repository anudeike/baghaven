<template>
    <v-container fill-height fluid>
        <v-row class="text-center">
            <v-col cols="12">
                <h1>Search with an image</h1>
            </v-col>
        </v-row>
        <v-row>
            <v-col>
                <v-row>
                    <v-file-input label="Click to add image" prepend-icon="mdi-camera" variant="underlined"
                        accept=".jpeg, .jpg, .png, image/jpg, image/jpeg, image/png" @change="onFileChange">
                    </v-file-input>
                </v-row>
                <v-row v-if="previewURL">
                    <v-img :src="previewURL">
                    </v-img>
                </v-row>
                <v-row>
                    <v-col cols="12">
                        <v-btn block>Search</v-btn>
                    </v-col>
                </v-row>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: "upload-image",
    data() {
        return {
            preview: null,
            previewURL: null
        };
    },
    methods: {
        onFileChange(e) {
            const files = e.target.files;

            if (files && files[0]) {
                let f = files[0];
                console.log("Selected file:", f); // Debugging: Log the file object

                if (f instanceof Blob) {
                    const url = URL.createObjectURL(f);

                    this.previewURL = url;
                    console.log("Preview URL: -->", url)
                } else {
                    console.error("Selected file is not a Blob object.");
                }
            } else {
                console.error("No file selected.");
                this.preview = null;
            }
        },
    },
    mounted() {

    },
};
</script>