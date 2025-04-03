

<template>
  <UApp>
    <LayoutsHeader />
    <Suspense>
      <template #default>
        <NuxtPage />
      </template>
      <template #fallback>
        <div class="text-center">Loading...</div>
      </template>
    </Suspense>
    <LayoutsFooter />
  </UApp>
</template>

