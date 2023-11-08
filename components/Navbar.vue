<template>
<nav class="bg-white border-gray-200 dark:bg-gray-900 border-b">
  <div class="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" class="flex items-center">
      <span class="self-center text-2xl font-extrabold whitespace-nowrap dark:text-white">sallmaxo</span>
  </a>
  <div class="flex md:order-2">
      <button type="button" class="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center mr-3 md:mr-0 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Get started</button>
      <button @click="onClick" data-collapse-toggle="navbar-cta" type="button" class="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600" aria-controls="navbar-cta" aria-expanded="false">
        <span class="sr-only">Open main menu</span>
        <svg class="w-5 h-5" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 17 14">
            <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M1 1h15M1 7h15M1 13h15"/>
        </svg>
    </button>
  </div>
  <div :class="[isCollapsed ? 'flex' : 'hidden' ,'items-center justify-between w-full md:flex md:w-auto md:order-1']" id="navbar-sticky">
    <ul class="w-full flex flex-col font-medium text-sm p-4 md:p-0 mt-4 rounded-md bg-white md:flex-row md:space-x-8 md:mt-0 md:border-0 md:bg-white dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700">
      
      <li v-for="link in links">
        <NuxtLink :to="link.href" :key="link.href" 
        :class="[link.href === $route.path
                ? 'text-blue-900 font-medium underline-offset-8 underline transition-all'
                : 'text-gray-900 transition-all', 
              'block pl-3 pr-4 py-2 rounded-md hover:bg-gray-100 md:hover:bg-transparent md:hover:text-blue-700 md:p-0 md:dark:hover:text-blue-500 dark:text-white dark:hover:bg-gray-700 dark:hover:text-white md:dark:hover:bg-transparent dark:border-gray-700']"> {{ link.label }} </NuxtLink>
      </li>
      
    </ul>
  </div>
  </div>
</nav>

</template>

<script setup> 
	let isCollapsed = ref(false);
	let onClick = () => isCollapsed.value = !isCollapsed.value;
	const route = useRoute();

	const links = [
		{'href':'/', 'label':'index'},
		{'href':'/services', 'label':'services'},
		{'href':'/courses', 'label':'courses'},
		{'href':'/projects', 'label':'show-cases'},
		{'href':'/contact', 'label':'contact'},
		{'href':'/about', 'label':'about'}

	]

	
</script>
<style lang="css" scoped>
	
</style>
