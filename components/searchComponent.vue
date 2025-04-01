<script setup lang="ts">
import Fuse from 'fuse.js';

const query = ref('');
const { data: searchData } = await useAsyncData('search-data', () =>
  queryCollection('blog').all()
);

const fuse = computed(() => {
  if (!searchData.value) return null;
  return new Fuse(searchData.value, {
    keys: ['title', 'description'],
    threshold: 0.3,
  });
});

const result = computed(() => {
  if (!fuse.value) return [];
  return fuse.value.search(toValue(query)).slice(0, 10);
});
</script>

<template>
  <div class="p-4">
    <UInput v-model="query" placeholder="Search..." class="w-full" />
    <ul v-if="query.length > 0" class="mt-2">
      <li v-if="result.length === 0">
        <p>Postingan Tidak di temukan.</p>
      </li>
      <li v-for="link of result" :key="link.item.id" class="mt-2">
        <UButton variant="ghost" class="w-full" :to="link.item.path">
          <div class="text-left">
            <p class="font-semibold">{{ link.item.title }}</p>
            <p class="text-xs">
              {{ link.item.description?.slice(0, 100) }}...
            </p>
          </div>
        </UButton>
      </li>
    </ul>
  </div>
</template>
