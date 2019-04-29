<script>
    import Welcome from "./Pages/Welcome.svelte";

    let Components = {
      Welcome
    };

    export let initialPage;
</script>

<svelte:component this="{ Components[initialPage.component] }"></svelte:component>
