<template>

  <base-card>
    <div class='form-control'>
    <form>
      <label for='title'>Title</label>
      <input id='title' name='title' type='text'>
    </form>
    </div>
    <div class='form-control'>
      <form>
        <label for='title'>Title</label>
        <textarea id='description' name='description' rows='3'></textarea>
      </form>
    </div>
    <div class='form-control'>
      <form>
        <label for='link'>Title</label>
        <textarea id='link' name='link' rows='3'></textarea>
      </form>
    </div>
    <div>
      <base-button type='submit'>Add Resource</base-button>
    </div>
  </base-card>
</template>
<script setup>
import BaseButton from '@/components/UI/BaseButton.vue';
</script>

<style scoped>
label {
    font-weight: bold;
    display: block;
    margin-bottom: 0.5rem;
}

input,
textarea {
    display: block;
    width: 100%;
    font: inherit;
    padding: 0.15rem;
    border: 1px solid #ccc;
}

input:focus,
textarea:focus {
    outline: none;
    border-color: #3a0061;
    background-color: #f7ebff;
}

.form-control {
    margin: 1rem 0;
}
</style>