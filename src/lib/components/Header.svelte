<script lang="ts">
    import calendarSvg from '$lib/assets/calendar.svg';
</script>

<nav class={`fixed top-0 left-0 md:h-[60px] h-[80px] w-full flex flex-row md:px-10 px-4 z-30 backdrop-blur bg-neutral-950/80`}>
    <div class={`flex flex-row h-full items-center gap-[5px]`}>
        <img src={calendarSvg} alt={`calendar-icon`}/>
        <h1 class={`text-white text-2xl font-medium`}>uni<span class={`text-neutral-300`}>.</span>evelynn</h1>
    </div>
</nav>
