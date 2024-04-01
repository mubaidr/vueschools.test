<script lang="ts" setup></script>

<template>
  <header>
    <nav>
      <div class="flex flex-wrap items-center justify-between mx-auto p-4">
        <div class="flex">
          <button
            data-collapse-toggle="navbar-default"
            type="button"
            class="inline-flex items-center p-2 w-14 h-14 justify-center text-sm text-gray-500 rounded-lg md:hidden focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
            aria-controls="navbar-default"
            aria-expanded="false"
          >
            <span class="sr-only">Open main menu</span>
            <svg
              class="w-5 h-5"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 17 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M1 1h15M1 7h15M1 13h15"
              />
            </svg>
          </button>

          <a
            href="https://vueschool.io/"
            class="flex items-center space-x-3 rtl:space-x-reverse"
          >
            <img
              src="/assets/logo.svg"
              class="w-12 h-12"
              alt="vueschool.io logo"
            />
            <span
              class="self-center text-xl font-semibold whitespace-nowrap dark:text-white leading-none"
            >
              Vue
              <br />
              School.io
            </span>
          </a>
        </div>
        <div class="hidden w-full md:block md:w-auto" id="navbar-default">
          <ul
            class="flex flex-col p-4 rounded-lg md:flex-row md:space-x-2 rtl:space-x-reverse"
          >
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded hover:text-primary dark:text-white"
                aria-current="page"
              >
                Courses
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded hover:text-primary dark:text-white"
                aria-current="page"
              >
                Plans
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded hover:text-primary dark:text-white"
                aria-current="page"
              >
                Business Serrvice
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded hover:text-primary dark:text-white"
                aria-current="page"
              >
                Learning Paths
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded hover:text-primary dark:text-white"
                aria-current="page"
              >
                Hiring
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded hover:text-primary dark:text-white"
                aria-current="page"
              >
                Articles
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded hover:text-primary dark:text-white"
                aria-current="page"
              >
                Events
              </a>
            </li>
            <li>
              <a
                href="#"
                class="block py-2 px-3 rounded hover:text-primary dark:text-white"
                aria-current="page"
              >
                Get Certified
              </a>
            </li>
          </ul>
        </div>

        <div class="flex gap-4">
          <a
            href="#"
            class="hover:text-primary dark:text-white content-center"
            aria-current="page"
          >
            Log in
          </a>
          <a
            href="#"
            aria-current="page"
            class="rounded-lg p-px bg-gradient-to-r from-primary to-accent hover:from-accent hover:to-primary transition-all"
          >
            <div class="bg-gray-800 px-6 py-2 rounded-lg">Sign up</div>
          </a>
        </div>
      </div>
    </nav>
  </header>
</template>

<style lang="scss" scoped></style>
