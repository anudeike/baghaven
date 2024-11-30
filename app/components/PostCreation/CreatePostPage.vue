<template>
    <v-container fill-height fluid>
        <v-row justify="center">
            <v-col cols="12">
                <v-file-input label="Click to add image" prepend-icon="mdi-camera" variant="underlined"
                    accept=".jpeg, .jpg, .png, image/jpg, image/jpeg, image/png" @change="onFileChange">
                </v-file-input>
            </v-col>
        </v-row>
        <v-row v-if="previewURL">
            <v-img :src="previewURL">

            </v-img>
            <v-card>
                <v-card-title>
                    preview: {{ previewURL }}
                </v-card-title>
            </v-card>
        </v-row>
        <v-row>
            <v-col cols="12">
                <v-btn block outlined>
                    Search
                </v-btn>
            </v-col>
        </v-row>
    </v-container>
</template>

<script>

export default {
    name: "upload-image",
    data() {
        return {

            //file: null,
            preview: null,
            previewURL: null
        };
    },
    methods: {
        previewImage() {
            if (this.file) {
                const reader = new FileReader();

                console.log("THIS IS THE FILE: ")
                console.log(this.file)

                console.log("FILE NAME: ")
                console.log(this.file.name)

                this.previewURL = this.file.name;

                //read uploaded file as a Data URL
                reader.onload = (e) => {
                    this.preview = e.target.result;


                    console.log("THIS IS THE FILE RESULT: ")
                    console.log(this.preview)

                    // convert to url
                    let ex = URL.createObjectURL(this.preview);
                    console.log("THIS IS THE EX: ")
                    console.log(ex)
                };

                reader.readAsDataURL(this.file); // start reading file data as a Data URL

                console.log("FILE PREVIEW: ");
                console.log(this.preview);

                console.log("FILE PREVIEW URL: ");
                //console.log(previewURL);
            }
        },
        onFileChange(e) {
            const files = e.target.files;

            if (files && files[0]) {
                let f = files[0];
                console.log("Selected file:", f); // Debugging: Log the file object

                if (f instanceof Blob) {
                    const url = URL.createObjectURL(f);

                    this.previewURL = url;
                    console.log("Preview URL: -->", url)   // Call the previewImage method
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