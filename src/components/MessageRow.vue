<template>
    <div id="MessageRow">
        <div 
            class="border-b hover:border-gray-200 hover:border-t hover:border-y-2 hover:border-x cursor-pointer"
            :class="[hasViewed ? 'bg-gray-100' : '']"
        >
            <div class="flex items-center px-4 py-2">
                <div class="flex items-center">
                    <component
                        :is="isSelected ? CheckboxOutlineIcon : CheckboxBlankOutlineIcon"
                        @click="isSelected = !isSelected"
                        :size="19"
                        fillColor="#636363"
                    />
                    <StarOutlineIcon class="ml-4" :size="19" fillColor="#636363" />
                </div>

                <div class="flex items-center w-full">
                    <router-link :to="`email/message/${id}`" class="w-full">
                        <div class="flex items-center justify-between">
                            <div class="flex items-center w-full">
                                <div class="ml-4 text -sm font-semibold truncate-from">
                                    {{ from }}
                                </div>
                                <div class="flex items-center justify-between">
                                    <div class="mr-1.5 text-sm font-semibold truncate-subject">
                                        {{ subject }}
                                    </div>
                                    <div class="mr-1.5 text-sm text-gray-500 font-semibold truncate-body">
                                        - {{ body }}...
                                    </div>
                                </div>
                            </div>


                            <div class="text-right truncate mr-4 w-full text-xs font-semibold">{{ time }}</div>

                        </div>
                    </router-link>
                </div>

            </div>
        </div>
    </div>
</template>

<script setup>
import { toRefs, defineProps, defineEmits, ref, watch } from 'vue';
import CheckboxBlankOutlineIcon from 'vue-material-design-icons/CheckboxBlankOutline.vue';
import CheckboxOutlineIcon from 'vue-material-design-icons/CheckboxOutline.vue';
import StarOutlineIcon from 'vue-material-design-icons/StarOutline.vue';

const emit = defineEmits(['selectedId']);

let isSelected = ref(false);

const props = defineProps({
    id: String,
    from: String,
    subject: String,
    body: String,
    time: String,
    hasViewed: Boolean
});

const { id, from, subject, body, time, hasViewed } = toRefs(props);

watch(isSelected, (bool) => {
    emit('selectedId', {id: id.value, bool: bool})
});

</script>

<style lang="scss">
#MessageRow {
    .truncate-from {
        width: 170px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .truncate-subject {
        max-width: 200px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }

    .truncate-body {
        max-width: 400px;
        text-overflow: ellipsis;
        overflow: hidden;
        white-space: nowrap;
    }
}
</style>
