<template>
    <header class="app-header">
        <div class="logo">
            <img class="img-logo"
                src="https://res.cloudinary.com/dda5opvsb/image/upload/v1715537462/Binance_Logo.svg_dhlzbj.png" alt="">
            <h1 style="color: #F0B90B">Vinance.vue</h1>
        </div>
        <nav style="color: #F0B90B;">
            <RouterLink style="color: #F0B90B;" to="/">Home</RouterLink>
            <RouterLink style="color: #F0B90B;" to="/contact">contacts</RouterLink>
            <RouterLink style="color: #F0B90B;" to="/about">About</RouterLink>
        </nav>
    </header>
</template>

<script>
export default {}
</script>

<style>
.app-header {
    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 10px;
    width: 100vw;
    margin-top: 1em;
    text-align: center;
    background-color: #181A20;
}

nav a.router-link-exact-active {
    color: #ffffff
}

nav a.router-link-exact-active:hover {
    background-color: transparent;
}

nav a {
    display: inline-block;
    padding: 0 1rem;
    border-left: 1px solid var(--color-border);
}

.logo {
    display: flex;
    flex-direction: row;
    margin-left: 1em;
    align-items: center;
    gap: 0.2em;
}

nav a:first-of-type {
    border: 0;
}

.img-logo {
    width: 2em;
    height: 2em;
}
</style>
