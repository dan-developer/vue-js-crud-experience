<template>
    <div class="list row">
        <div class="col-md-8">
            <div class="input-group mb-3">
                <input
                    v-model="title"
                    class="form-control"
                    placeholder="Search by title"
                    type="text"
                />
                <div class="input-group-append">
                    <button
                        class="btn btn-outline-secondary"
                        type="button"
                        @click="searchTitle"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <h4>Tutorials List</h4>
            <ul class="list-group">
                <li
                    v-for="(tutorial, index) in tutorials"
                    :key="index"
                    :class="{ active: index == currentIndex }"
                    class="list-group-item"
                    @click="setActiveTutorial(tutorial, index)"
                >
                    {{ tutorial.title }}
                </li>
            </ul>

            <button class="m-3 btn btn-sm btn-danger" @click="removeAllTutorials">
                Remove All
            </button>
        </div>
        <div class="col-md-6">
            <div v-if="currentTutorial.id">
                <h4>Tutorial</h4>
                <div>
                    <label><strong>Title:</strong></label> {{ currentTutorial.title }}
                </div>
                <div>
                    <label><strong>Description:</strong></label>
                    {{ currentTutorial.text }}
                </div>
                <div>
                    <label><strong>Date of creation:</strong></label>
                    {{ currentTutorial.dateCreation }}
                </div>

                <router-link
                    :to="'/tutorial/' + currentTutorial.id"
                    class="badge badge-warning"
                >Edit
                </router-link
                >
            </div>
            <div v-else>
                <br />
                <p>Please click on a Tutorial...</p>
            </div>
        </div>
    </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue'
import TutorialDataService from '@/services/data/Tutorial'
import Tutorial from '@/types/Tutorial'
import ResponseData from '@/types/ResponseData'

export default defineComponent({
    name: 'tutorials-list',
    data() {
        return {
            tutorials: [] as Tutorial[],
            currentTutorial: {} as Tutorial,
            currentIndex: -1,
            title: '',
        }
    },
    methods: {
        retrieveTutorials() {
            TutorialDataService.getAll()
                .then((response: ResponseData) => {
                    this.tutorials = response.data
                    console.log(response.data)
                })
                .catch((e: Error) => {
                    console.log(e)
                })
        },

        refreshList() {
            this.retrieveTutorials()
            this.currentTutorial = {} as Tutorial
            this.currentIndex = -1
        },

        setActiveTutorial(tutorial: Tutorial, index = -1) {
            this.currentTutorial = tutorial
            this.currentIndex = index
        },

        removeAllTutorials() {
            TutorialDataService.deleteAll()
                .then((response: ResponseData) => {
                    console.log(response.data)
                    this.refreshList()
                })
                .catch((e: Error) => {
                    console.log(e)
                })
        },

        searchTitle() {
            TutorialDataService.findByTitle(this.title)
                .then((response: ResponseData) => {
                    this.tutorials = response.data
                    this.setActiveTutorial({} as Tutorial)
                    console.log(response.data)
                })
                .catch((e: Error) => {
                    console.log(e)
                })
        },
    },
    mounted() {
        this.retrieveTutorials()
    },
})
</script>

<style>
.list {
    text-align: left;
    max-width: 750px;
    margin: auto;
}
</style>
