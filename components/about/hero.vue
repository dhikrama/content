<template>
  <div class="bg-gray-100 py-12">
    <div class="container mx-auto px-4">
      <div class="max-w-2xl mx-auto text-center">
        <h1 class="text-4xl font-bold text-gray-800 mb-4">
          <slot name="title"></slot>
        </h1>
        <p class="text-gray-600">
          <slot name="description"></slot>
        </p>
      </div>
    </div>
  </div>
</template>
