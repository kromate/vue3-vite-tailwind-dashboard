<template>
  <div class="card">
    <div class="card-body">
      <slot />
    </div>

    <div class="card-arrow">
      <div class="card-arrow-top-left"></div>
      <div class="card-arrow-top-right"></div>
      <div class="card-arrow-bottom-left"></div>
      <div class="card-arrow-bottom-right"></div>
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
.card {
  --bs-border-color: #ffffff;
  position: relative;
  border-width: initial;
  border-style: none;
  border-color: initial;
  border-image: initial;
  /* margin-bottom: 1rem !important; */
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 0px;
  height: 100%;
  overflow-wrap: break-word;

  background-clip: border-box;
}

.card:not(.border-0)::before {
  left: 15px;
  right: 15px;
  top: 0px;
  bottom: 0px;
  opacity: 0.3;
  border-top: 1px solid var(--bs-border-color);
  border-bottom: 1px solid var(--bs-border-color);
}
.card::after,
.card::before {
  content: "";
  position: absolute;
  z-index: -1;
}

.card:not(.border-0)::after {
  top: 15px;
  bottom: 15px;
  left: 0px;
  right: 0px;
  opacity: 0.3;
  border-left: 1px solid var(--bs-border-color);
  border-right: 1px solid var(--bs-border-color);
}
.card-body {
  flex: 1 1 auto;
  padding: 1rem 1rem;
  /* padding: 0.5rem 0.7rem; */
  /* margin: 0.5rem; */
}

.card .card-arrow {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  z-index: -1;
}
.card .card-arrow-bottom-left,
.card .card-arrow-bottom-right,
.card .card-arrow-top-left,
.card .card-arrow-top-right {
  width: 10px;
  height: 10px;
  position: absolute;
}
.card .card-arrow-bottom-left:before,
.card .card-arrow-bottom-right:before,
.card .card-arrow-top-left:before,
.card .card-arrow-top-right:before {
  content: "";
  position: absolute;
  width: 2px;
  height: 8px;
  background: var(--bs-border-color);
  opacity: 0.75;
}
.card .card-arrow-bottom-left:after,
.card .card-arrow-bottom-right:after,
.card .card-arrow-top-left:after,
.card .card-arrow-top-right:after {
  content: "";
  position: absolute;
  width: 10px;
  height: 2px;
  background: var(--bs-border-color);
  opacity: 0.75;
}
.card .card-arrow-top-left,
.card .card-arrow-top-right {
  top: 0;
}
.card .card-arrow-top-left:before,
.card .card-arrow-top-right:before {
  top: 2px;
}
.card .card-arrow-top-left:after,
.card .card-arrow-top-right:after {
  top: 0;
}
.card .card-arrow-bottom-left,
.card .card-arrow-bottom-right {
  bottom: 0;
}
.card .card-arrow-bottom-left:before,
.card .card-arrow-bottom-right:before {
  bottom: 2px;
}
.card .card-arrow-bottom-left:after,
.card .card-arrow-bottom-right:after {
  bottom: 0;
}
.card .card-arrow-bottom-left,
.card .card-arrow-top-left {
  left: 0;
}
.card .card-arrow-bottom-left:after,
.card .card-arrow-bottom-left:before,
.card .card-arrow-top-left:after,
.card .card-arrow-top-left:before {
  left: 0;
}
.card .card-arrow-bottom-right,
.card .card-arrow-top-right {
  right: 0;
}
.card .card-arrow-bottom-right:after,
.card .card-arrow-bottom-right:before,
.card .card-arrow-top-right:after,
.card .card-arrow-top-right:before {
  right: 0;
}
</style>
