<script lang="ts">
    import calendarSvg from '$lib/assets/calendar.svg';
</script>

<nav class={`fixed top-0 left-0 h-[60px] w-full flex flex-row px-10 z-30 backdrop-blur`}>
    <div class={`flex flex-row h-full items-center gap-[5px]`}>
        <img src={calendarSvg} alt={`calendar-icon`}/>
        <h1 class={`text-white text-2xl font-medium`}>uni<span class={`text-neutral-300`}>.</span>evelynn</h1>
    </div>
</nav>
