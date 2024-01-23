<template>
    <div class="edit-container">
        <h2>{{ this.header }}</h2>
        <form ref="myForm" @submit.prevent="submitForm">

            <div class="group">
                <label>שם</label>
                <input type="text" v-model="recipe.title">
            </div>

            <div class="group">
                <label>תיאור</label>
                <textarea name="" id="" cols="70" rows="4" v-model="recipe.description"></textarea>
            </div>

            <div class="group">
                <label>תגיות</label>
                <Multiselect mode="tags"
                    v-model="selectedTagTitles"
                    :default="[]"
                    :close-on-select="false"
                    :searchable="true"
                    :rtl="true"
                    :options="tagSelectOptions" />
            </div>

            <div class="group">
                <label>רכיבים</label>
                <ul>
                    <li v-if="recipe.ingredients?.length" v-for="(ingredient, idx) in recipe.ingredients">
                        <input class="ingridient-input" type="text" v-model="recipe.ingredients[idx]">
                        <button class="remove-btn btn-config1" title="הסרה"
                            @click.stop.prevent="removeIngridient(idx)">X</button>
                    </li>
                </ul>
                <div class="add-container">
                    <button class="add-input btn-config1" title="הוספת רכיב" @click.stop.prevent="addIngridient">+</button>
                </div>
            </div>

            <div class="group">
                <label>אופן הכנה</label>
                <ol>
                    <li v-if="recipe.method?.length" v-for="(step, idx) in recipe.method">
                        <input class="step-input" type="text" v-model="recipe.method[idx]">
                        <button class="remove-btn btn-config1" title="הסרה" @click.stop.prevent="removeStep(idx)">X</button>
                    </li>
                </ol>
                <div class="add-container">
                    <button class="add-input btn-config1" title="הוספת שלב" @click.stop.prevent="addStep">+</button>
                </div>
                <!-- <input type="file" @change="uploadImg"> -->
            </div>

            <div class="button-row">
                <button class="btn-config1" title="שמירה" type="submit">
                    <font-awesome-icon :icon="['fas', 'floppy-disk']" />
                </button>
                <RouterLink class="btn-config1" title="חזרה לעמוד הבית" tag="button" :to="'/'">
                    <font-awesome-icon :icon="['fas', 'arrow-left']" />
                </RouterLink>
            </div>
        </form>
    </div>
</template>

<script>
import { recipeService } from '../services/recipe.service'
import { mapGetters, mapActions } from 'vuex'

import Multiselect from '@vueform/multiselect'


export default {
    props: {
        recipeToEdit: { type: Object }
    },
    data() {
        return {
            recipe: {},
            isEditMode: false,
            tagSelectOptions: [],
            selectedTagTitles: []
        }
    },
    async created() {
        if (this.$route.params.recipeId) {
            this.isEditMode = true
        }

        await this.loadRecipe()
        if (!this.getTags.length) {
            await this.fetchTags()
        }

        // Get tag titles based on tag ids so they can be shown in the multiselect
        this.tagSelectOptions = this.getTags.map(tag => tag.title)
    },
    methods: {
        ...mapActions(['addRecipe', 'updateRecipe', 'fetchTags']),

        async submitForm() {
            console.log("🚀 ~ submitForm ~ recipe:", this.recipe)

            // Get tag ids based on the tag titles the user picked in the multiselect
            // so they could be put inside the object
            this.recipe.tags = this.selectedTagTitles.map(title => this.getTagIdByTitle(title))

            if (this.recipe?._id) {
                await this.updateRecipe(this.recipe)
            } else {
                await this.addRecipe(this.recipe)
            }
            this.$router.push("/")
        },
        async loadRecipe() {
            if (this.isEditMode) {
                const recipeId = this.$route.params.recipeId
                this.recipe = await recipeService.getById(recipeId)

                // Fetch tag titles based on tag ids
                const tagTitles = this.recipe.tags.map(tagId => this.getTagTitleById(tagId))

                // Filter out null titles (tags that couldn't be found)
                const existingTagTitles = tagTitles.filter(title => title !== null)

                this.selectedTagTitles = existingTagTitles
            } else {
                this.recipe = {
                    title: '',
                    description: '',
                    ingredients: ['', '', ''],
                    method: ['', '', ''],
                    tags: [],
                    // imgURL: '',
                }
            }
        },
        addIngridient() {
            this.recipe.ingredients.push([''])
        },
        removeIngridient(idx) {
            this.recipe.ingredients.splice(idx, 1)
        },
        addStep() {
            this.recipe.method.push([''])
        },
        removeStep(idx) {
            this.recipe.method.splice(idx, 1)
        },
        myChangeEvent(val) {
            console.log(val);
        },
        mySelectEvent({ id, text }) {
            console.log({ id, text })
        }
        // test:
        // uploadImg(ev) {
        //     const file = ev.target.files[0]
        //     const filePath = ev.target.value
        //     if (filePath) {
        //         const imgURL = filePath
        //         console.log('imgURL', imgURL)
        //         this.recipe.imgURL = imgURL
        //     }
        // }
    },
    computed: {
        ...mapGetters(['getTags', 'getTagIdByTitle', 'getTagTitleById']),
        header() {
            const header = this.isEditMode ? 'עריכת מתכון' : 'הוספת מתכון'
            return header
        }
    },
    components: {
        Multiselect
    }
}
</script>
