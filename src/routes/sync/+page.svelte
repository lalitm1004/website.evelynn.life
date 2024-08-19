<script lang="ts">
    import { goto } from '$app/navigation';
    import { page } from '$app/stores';
    import parseSchedule from '$lib/utils/parseSchedule';
    import { onMount } from 'svelte';

    let schedule: WeeklySchedule | null = null;
    onMount(() => {
        const urlSchedule = $page.url.searchParams.get('schedule');
        if (urlSchedule) {
            const prototypeSchedule = JSON.parse(urlSchedule);
            schedule = parseSchedule(prototypeSchedule);
        } else {
            goto('/')
        }
    })
</script>