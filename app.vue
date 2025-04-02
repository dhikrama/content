

<template>
  <UApp>
    <LayoutsHeader />
    <Suspense>
      <template #default>
        <LazyNuxtPage />
      </template>
      <template #fallback>
        <div class="text-center">Loading...</div>
      </template>
    </Suspense>
    <LayoutsFooter />
  </UApp>
</template>

