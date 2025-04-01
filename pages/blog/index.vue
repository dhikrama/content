<script setup lang="ts">
const { data: posts } = await useAsyncData('blog', () =>
  queryCollection('blog').all()
);

console.log(posts.value)
</script>

<template>
  <UContainer class="py-8">
    <div class="flex flex-col md:flex-row items-center justify-between mb-8">
      <h1 class="text-3xl font-bold mb-4 md:mb-0">Blog Posts</h1>
      <SearchComponent class="w-full md:w-auto" />
    </div>

    <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <div v-if="posts && posts.length > 0" v-for="post in posts" :key="post.id">
        <UCard class="hover:shadow-lg transition-shadow duration-300">
          <template #header>
            <h2 class="text-xl font-semibold">
              <NuxtLink :to="post.path" class="hover:underline">
                {{ post.title }}
              </NuxtLink>
            </h2>
          </template>
          <p >
             <span v-if="post.description">{{ post.description.slice(0, 150) }}...</span>
            <span v-else>No description available.</span>
          </p>
          <template #footer>
            <NuxtLink :to="post.path" class="text-blue-600 hover:underline">
              Read More &rarr;
            </NuxtLink>
          </template>
        </UCard>
      </div>
        <div v-else>
            <p>No Postings</p>
        </div>
    </div>
  </UContainer>
</template>

<style scoped>
/* You can add more specific styling here if needed */
</style>
