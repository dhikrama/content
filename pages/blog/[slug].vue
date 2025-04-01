<script setup>
const route = useRoute()
const { data: post } = await useAsyncData(route.path, () => {
  return queryCollection('content').path(route.path).first()
})


// Ambil semua authors
const { data: authors } = await useAsyncData("authors", () => {
  return queryCollection("authors").order("name", "DESC").all();
});
console.log(post.value.meta);

useSeoMeta({
  title: post.value?.title,
  description: post.value?.description,
});

// get author of post
const getAuthorOfPost = computed(() => {
  if (!post.value.meta || !authors.value || !post.value.meta?.author) return null;

  const authorId = String(post.value.meta.author); // ID dari post
  console.log("Author ID from post:", authorId);

  return authors.value.find((author) => {
    // Ekstrak ID dari path di author.id
    const authorIdFromPath = author.id.split('/').pop().replace('.json', '');
    return authorIdFromPath === authorId;
  });
});

console.log("Author of Post:", getAuthorOfPost.value);

//format date
const formattedDate = computed(() => {
  if (post.value && post.value.date) {
    const date = new Date(post.value.date);
    const options = { year: "numeric", month: "long", day: "numeric" };
    return date.toLocaleDateString("id-ID", options);
  }
  return "Tanggal tidak tersedia";
});
</script>

<template>
  <div class="container mx-auto px-4 py-8">
    <div v-if="post" class="max-w-3xl mx-auto">
      <!-- Hero Section -->
      <section class="mb-8">
        <div class=" p-6 rounded-lg shadow-md">
          <h1 class="text-3xl font-boldmb-2">
            {{ post.title }}
          </h1>
          <div class="flex items-center">
            <div
              v-if="
                getAuthorOfPost &&
                (getAuthorOfPost.avatar || getAuthorOfPost.image)
              "
              class="mr-2"
            >
              <img
                :src="getAuthorOfPost.avatar || getAuthorOfPost.image"
                :alt="getAuthorOfPost.name"
                class="w-10 h-10 rounded-full"
              />
            </div>
            <span v-if="getAuthorOfPost" class="font-medium"
              >By {{ getAuthorOfPost.name }}</span
            >
          </div>
          <p class="text-sm mt-1">Published on {{ formattedDate }}</p>
        </div>

        <SearchComponent />
      </section>

      <!-- Author Bio (if available) -->
      <section v-if="getAuthorOfPost && getAuthorOfPost.bio" class="mb-8">
        <div class=" p-6 rounded-lg shadow-md">
          <h2 class="text-xl font-semibold mb-2">About the Author</h2>
          <p>{{ getAuthorOfPost.bio }}</p>
        </div>
      </section>

      <!-- Blog Content -->
      <section class="blog-content">
        <UCard>
          <ContentRenderer :value="post" />
        </UCard>
      </section>
    </div>

    <div v-else>
      <p>Postingan tidak ditemukan.</p>
    </div>
  </div>
</template>

<style scoped>
/* General Styling */
.container {
  font-family: "Segoe UI", Tahoma, Geneva, Verdana, sans-serif;
}

.blog-content {
  line-height: 1.6;
}
.blog-content h1,
.blog-content h2,
.blog-content h3,
.blog-content h4,
.blog-content h5,
.blog-content h6 {
  font-weight: bold;
  color: #222;
}
.blog-content h1 {
  font-size: 2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
}
.blog-content h2 {
  font-size: 1.75rem;
  margin-top: 1.75rem;
  margin-bottom: 0.75rem;
}
.blog-content h3 {
  font-size: 1.5rem;
  margin-top: 1.5rem;
  margin-bottom: 0.5rem;
}
.blog-content h4 {
  font-size: 1.25rem;
  margin-top: 1.25rem;
  margin-bottom: 0.25rem;
}
.blog-content p {
  margin-bottom: 1rem;
}
.blog-content img {
  max-width: 100%;
  height: auto;
  margin: 1rem auto;
  display: block;
}
.blog-content ul,
.blog-content ol {
  margin-bottom: 1rem;
}
.blog-content ul {
  list-style-type: disc;
  padding-left: 2rem;
}
.blog-content ol {
  list-style-type: decimal;
  padding-left: 2rem;
}
.blog-content blockquote {
  background-color: #f5f5f5;
  border-left: 5px solid #ccc;
  padding: 1rem;
  margin-bottom: 1rem;
}
.blog-content code {
  background-color: #f0f0f0;
  padding: 0.2rem 0.4rem;
  border-radius: 3px;
  font-family: monospace;
}

.blog-content pre {
  background-color: #f0f0f0;
  padding: 1rem;
  border-radius: 5px;
  overflow-x: auto;
  font-family: monospace;
}

/* Responsive Design */
@media (max-width: 768px) {
  .blog-content h1 {
    font-size: 1.75rem;
  }
  .blog-content h2 {
    font-size: 1.5rem;
  }
  .blog-content h3 {
    font-size: 1.25rem;
  }
}
</style>
