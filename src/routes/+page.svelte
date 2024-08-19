<script lang="ts">
    import Hero from '$lib/components/landing/Hero.svelte';
    import HowItWorks from '$lib/components/landing/HowItWorks.svelte'
</script>

<main>
    <section class={`min-h-[100dvh] w-screen grid place-items-center`}>
        <Hero />
    </section>
    <section class={`min-h-[100dvh] w-screen grid place-items-center`}>
        <HowItWorks />
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