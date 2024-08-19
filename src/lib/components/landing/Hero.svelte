<script lang="ts">
    import eSquarePng from '$lib/assets/e-square.png';
    import refreshCwSvg from '$lib/assets/refresh-cw.svg';
    import circleHelpSvg from '$lib/assets/circle-help.svg';
</script>

<div class={`flex md:w-fit w-[90%] md:flex-row flex-col justify-between items-center md:gap-20 gap-0 md:mt-0 mt-10`}>
    <div class={`flex flex-col md:gap-0 gap-4 md:items-baseline items-center`}>
        <h1 class={`md:text-8xl text-6xl font-bold md:text-left text-center`}>
            <span class={`md:text-7xl text-4xl`}>Sync your Schedule.</span>
            <br>
            Seamlessly.
        </h1>
        <p class={`md:text-2xl text-xl text-neutral-600 md:text-left text-center md:mt-2 mt-0`}>
            Integrate ERP data into google calendar with the click of a button.
        </p>
        <div class={`flex md:flex-row flex-col items-center gap-4 md:mt-4 w-full`}>
            <button class={`md:w-[220px] w-[80%] flex flex-row justify-center gap-2 bg-neutral-50 text-neutral-950 text-xl py-4 rounded-lg hover:bg-neutral-300 transition-colors duration-200`}>
                <img src={refreshCwSvg} alt={`refresh-cw-icon`}/>
                <p>Get Started</p>
            </button>
            <button class={`md:w-[220px] w-[80%] flex flex-row justify-center gap-2 bg-neutral-50 text-neutral-950 text-xl py-4 rounded-lg hover:bg-neutral-300 transition-colors duration-200`}>
                <img src={circleHelpSvg} alt={`circle-help-icon`}/>
                <p>How It Works</p>
            </button>
        </div>
    </div>

    <img class={`md:h-[300px] h-[250px] aspect-square rounded-xl md:mt-0 mt-8`} src={eSquarePng} alt={`evelynn-mascot`}/>
</div>