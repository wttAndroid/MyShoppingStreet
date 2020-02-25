<template>
    <div class="toobar">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "toobar"
    }
</script>

<style scoped>
.toobar {
    display: flex;
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
}
</style>
