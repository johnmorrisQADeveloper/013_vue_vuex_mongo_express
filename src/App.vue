<template>
  <div id="app">
    <div id="container">
      <router-link to="/">Home</router-link> |
      <router-link to="/todoapp">TodoApp</router-link>
    </div>
    <router-view/>
  </div>
</template>

<style>
body {
  font-family: "Franklin Gothic Medium", "Arial Narrow", Arial, sans-serif;
  line-height: 1.6;
  background: #e8f7f0;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}
</style>
