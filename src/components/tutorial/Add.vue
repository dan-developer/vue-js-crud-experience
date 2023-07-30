<template>
    <div class="submit-form">
        <div v-if="!submitted">
            <div class="form-group">
                <label for="title">Title</label>
                <input
                    id="title"
                    v-model="tutorial.title"
                    class="form-control"
                    name="title"
                    required
                    type="text"
                />
            </div>

            <div class="form-group">
                <label for="description">Description</label>
                <input
                    id="description"
                    v-model="tutorial.text"
                    class="form-control"
                    name="description"
                    required
                />
            </div>

            <button class="btn btn-success" @click="saveTutorial">Submit</button>
        </div>

        <div v-else>
            <h4>You submitted successfully!</h4>
            <button class="btn btn-success" @click="newTutorial">Add</button>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TutorialDataService from '@/services/data/Tutorial'
import Tutorial from '@/types/Tutorial'
import ResponseData from '@/types/ResponseData'

export default defineComponent({
    name: 'tutorial-add',
    data() {
        return {
            tutorial: {
                id: null,
                title: '',
                text: '',
                dateCreation: false,
            } as Tutorial,
            submitted: false,
        }
    },
    methods: {
        saveTutorial() {
            const data = {
                title: this.tutorial.title,
                text: this.tutorial.text,
            }

            TutorialDataService.create(data)
                .then((response: ResponseData) => {
                    this.tutorial.id = response.data.id
                    console.log(response.data)
                    this.submitted = true
                })
                .catch((e: Error) => {
                    console.log(e)
                })
        },

        newTutorial() {
            this.submitted = false
            this.tutorial = {} as Tutorial
        },
    },
})
</script>

<style>
.submit-form {
    max-width: 300px;
    margin: auto;
}
</style>
