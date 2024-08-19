<script lang="ts">
    import eSquarePng from '$lib/assets/e-square.png';
    import refreshCwSvg from '$lib/assets/refresh-cw.svg';
    import circleHelpSvg from '$lib/assets/circle-help.svg';
</script>

<main class={`h-fit w-full`}>
    <div class={`flex flex-row justify-between items-center mx-32 mt-24`}>
        <div class={`flex flex-col gap-4`}>
            <h1 class={`text-8xl font-bold`}>
                <span class={`text-7xl`}>Sync your Schedule.</span>
                <br />
                Seamlessly.
            </h1>
            <p class={`text-2xl text-neutral-600`}>
                Integrate ERP data into google calendar with the click of a button.
            </p>
            <div class={`flex flex-row gap-4 mt-4`}>
                <button class={`w-[220px] flex flex-row justify-center gap-2 bg-neutral-50 text-neutral-950 text-xl px-4 py-4 rounded-lg hover:bg-neutral-300 transition-colors duration-200`}>
                    <img src={refreshCwSvg} alt={`refresh-cw-icon`}/>
                    <p>Get Started</p>
                </button>
                <button class={`w-[220px] flex flex-row justify-center gap-2 bg-neutral-50 text-neutral-950 text-xl px-4 py-4 rounded-lg hover:bg-neutral-300 transition-colors duration-200`}>
                    <img src={circleHelpSvg} alt={`circle-help-icon`}/>
                    <p>How It Works</p>
                </button>
            </div>
        </div>

        <img class={`h-[300px] aspect-square rounded-xl`} src={eSquarePng} alt={`evelynn-mascot`}/>
    </div>

    <div class={`h-[100px] w-full bg-red-100 mt-60`}>

    </div>
</main>