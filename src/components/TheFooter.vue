<script setup lang="ts">
import { availableLocales, loadLanguageAsync } from '~/modules/i18n'

const { t, locale } = useI18n()

async function toggleLocales() {
  // change to some real logic
  const locales = availableLocales
  const newLocale = locales[(locales.indexOf(locale.value) + 1) % locales.length]
  await loadLanguageAsync(newLocale)
  locale.value = newLocale
}
</script>

<template>
  <footer class="footer">
    <div class="logo">
      <a href="/">
        <img alt="Brand" src="../assets/logo.svg" h-30px>
      </a>
    </div>

    <p class="copyright-holder">
      © 2023 by ALSO Holding AG
    </p>
  </footer>
</template>

<style scoped>
  .footer {
    @apply flex items-center justify-between border-t-2 border-black p-t-4;
  }
</style>
