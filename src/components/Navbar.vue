<script setup>
import Product from '../components/MmProduct.vue';
</script>
<template>
    <header
        class="flex flex-wrap sm:justify-start sm:flex-nowrap z-50 w-full bg-white border-b border-gray-200 text-sm py-3 sm:py-0 ">
        <nav class="relative max-w-[80rem] w-full mx-auto px-4 sm:flex sm:items-center sm:justify-between sm:px-6 lg:px-8"
            aria-label="Global">
            <div class="flex items-center justify-between">
                <a class="flex-none text-xl font-semibold " href="#" aria-label="Brand">
                    <img src="@/assets/logo-kaigo.jpg" alt="" srcset="" class="max-w-[120px]">
                </a>
                <div class="sm:hidden">
                    <button type="button"
                        class="hs-collapse-toggle size-9 flex justify-center items-center text-sm font-semibold rounded-lg border border-gray-200 text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none"
                        data-hs-collapse="#navbar-collapse-with-animation"
                        aria-controls="navbar-collapse-with-animation" aria-label="Toggle navigation">
                        <svg class="hs-collapse-open:hidden size-4" width="16" height="16" fill="currentColor"
                            viewBox="0 0 16 16">
                            <path fill-rule="evenodd"
                                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5z" />
                        </svg>
                        <svg class="hs-collapse-open:block flex-shrink-0 hidden size-4" width="16" height="16"
                            fill="currentColor" viewBox="0 0 16 16">
                            <path
                                d="M4.646 4.646a.5.5 0 0 1 .708 0L8 7.293l2.646-2.647a.5.5 0 0 1 .708.708L8.707 8l2.647 2.646a.5.5 0 0 1-.708.708L8 8.707l-2.646 2.647a.5.5 0 0 1-.708-.708L7.293 8 4.646 5.354a.5.5 0 0 1 0-.708z" />
                        </svg>
                    </button>
                </div>
            </div>
            <div id="navbar-collapse-with-animation"
                class="hs-collapse hidden overflow-hidden transition-all duration-300 basis-full grow sm:block">
                <div
                    class="flex flex-col gap-y-4 gap-x-0 mt-5 sm:flex-row sm:items-center sm:justify-end sm:gap-y-0 sm:gap-x-7 sm:mt-0 sm:ps-7">
                    <div
                        class="hs-dropdown [--strategy:static] sm:[--strategy:fixed] [--adaptive:none] sm:[--trigger:hover] sm:py-4">
                        <button type="button"
                            class="flex items-center gap-1 w-full text-gray-500 hover:text-gray-400 font-medium  ">
                            Produk
                            <i class="bi bi-chevron-down"></i>
                        </button>

                        <div
                            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 w-max  hidden z-10 top-full start-0 min-w-60 bg-white md:shadow-2xl rounded-b-lg py-2 md:p-4 lg:p-6 dark:bg-neutral-800 dark:divide-neutral-700 before:absolute before:-top-5 before:start-0 before:w-full before:h-5">
                            <Product />
                        </div>
                    </div>
                    <!-- dropdown  -->
                    <div
                        class="hs-dropdown [--strategy:static] md:[--strategy:absolute] [--adaptive:none] md:[--trigger:hover] py-3 md:py-6">
                        <button type="button"
                            class="flex items-center w-full text-gray-800 hover:text-gray-600 font-medium dark:text-neutral-200 dark:hover:text-neutral-500">
                            Problem & Solution
                            <svg class="flex-shrink-0 ms-2 size-2.5" width="16" height="16" viewBox="0 0 16 16"
                                fill="none" xmlns="http://www.w3.org/2000/svg">
                                <path d="M2 5L8.16086 10.6869C8.35239 10.8637 8.64761 10.8637 8.83914 10.6869L15 5"
                                    stroke="currentColor" stroke-width="2" stroke-linecap="round"></path>
                            </svg>
                        </button>

                        <div
                            class="hs-dropdown-menu transition-[opacity,margin] duration-[0.1ms] md:duration-[150ms] hs-dropdown-open:opacity-100 opacity-0 md:w-80 hidden z-10 bg-white md:shadow-2xl rounded-b-lg py-2 md:p-2 dark:bg-neutral-800 dark:divide-neutral-700 before:absolute top-full before:-top-5 before:start-0 before:w-full before:h-5">
                            <a class="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                href="#">
                                <i class="bi bi-gear text-xl"></i>
                                <div class="grow">
                                    <span class="block font-semibold mb-1 text-gray-800 dark:text-neutral-200">Solusi
                                        One</span>
                                    How you get the most accurate and up-to-date
                                </div>
                            </a>

                            <div class="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                            <a class="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                href="#">
                                <i class="bi bi-car-front-fill text-xl"></i>
                                <div class="grow">
                                    <span class="block font-semibold mb-1 text-gray-800 dark:text-neutral-200">Solusi
                                        Two </span>
                                    ipsum dolor sit amet, consectetur adipisicing elit. Molestiae, molestias.
                                </div>
                            </a>

                            <div class="my-2 border-t border-gray-100 dark:border-neutral-800"></div>

                            <a class="inline-flex gap-x-5 w-full p-4 text-gray-600 rounded-lg hover:bg-gray-100 focus:ring-2 focus:ring-blue-500 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300"
                                href="#">
                                <i class="bi bi-tools text-xl"></i>
                                <div class="grow">
                                    <span class="block font-semibold mb-1 text-gray-800 dark:text-neutral-200">Solusi
                                        Three</span>
                                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Tenetur, aperiam?
                                </div>
                            </a>
                        </div>
                    </div>
                    <!-- enddropdown -->
                    <a class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 " href="#">Berita Acara</a>
                    <a class="font-medium text-gray-500 hover:text-gray-400 sm:py-6 " href="#">Tentang Kami</a>
                    <a href="#" class="bg-blue-500 text-white rounded-lg py-2 px-6"> Hubungi Kami <i
                            class="ml-2 bi bi-telephone-inbound-fill"></i></a>
                </div>
            </div>
        </nav>
    </header>

</template>