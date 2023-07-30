<template>
    <div v-if="currentTutorial.id" class="edit-form">
        <h4>Tutorial</h4>
        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input
                    id="title"
                    v-model="currentTutorial.title"
                    class="form-control"
                    type="text"
                />
            </div>
            <div class="form-group">
                <label for="description">Text</label>
                <input
                    id="description"
                    v-model="currentTutorial.text"
                    class="form-control"
                    type="text"
                />
            </div>
        </form>

        <button class="badge badge-danger mr-2" @click="deleteTutorial">
            Delete
        </button>

        <button class="badge badge-success" type="submit" @click="updateTutorial">
            Update
        </button>
        <p>{{ message }}</p>
    </div>

    <div v-else>
        <br />
        <p>Please click on a Tutorial...</p>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TutorialDataService from '@/services/data/Tutorial'
import Tutorial from '@/types/Tutorial'
import ResponseData from '@/types/ResponseData'

export default defineComponent({
    name: 'tutorial-detail',
    data() {
        return {
            currentTutorial: {} as Tutorial,
            message: '',
        }
    },
    methods: {
        getTutorial(id: any) {
            TutorialDataService.get(id)
                .then((response: ResponseData) => {
                    this.currentTutorial = response.data
                    console.log(response.data)
                })
                .catch((e: Error) => {
                    console.log(e)
                })
        },

        updateTutorial() {
            TutorialDataService.update(this.currentTutorial.id, this.currentTutorial)
                .then((response: ResponseData) => {
                    console.log(response.data)
                    this.message = 'The tutorial was updated successfully!'
                })
                .catch((e: Error) => {
                    console.log(e)
                })
        },

        deleteTutorial() {
            TutorialDataService.delete(this.currentTutorial.id)
                .then((response: ResponseData) => {
                    console.log(response.data)
                    this.$router.push({name: 'tutorials'})
                })
                .catch((e: Error) => {
                    console.log(e)
                })
        },
    },
    mounted() {
        this.message = ''
        this.getTutorial(this.$route.params.id)
    },
})
</script>

<style>
.edit-form {
    max-width: 300px;
    margin: auto;
}
</style>
