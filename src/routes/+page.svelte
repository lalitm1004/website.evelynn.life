<script lang="ts">

    import Hero from '$lib/components/Hero.svelte';
</script>

<main>
    <section class={`min-h-[100dvh] w-screen grid place-items-center`}>
        <Hero />
    </section>
    <section class={`min-h-[100dvh] w-screen grid place-items-center`}>
        
    </section>
</main>

<style>
    main {
        scroll-snap-type: y mandatory;
        overflow-y: scroll;
        overflow-x: hidden;
        height: 100vh;
    }

    section {
        scroll-snap-align: start;
    }
</style>