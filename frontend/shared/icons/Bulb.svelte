<script>
    export let selected = false;
    
    // Reactive statement to ensure component updates when selected changes
    $: isSelected = selected;
</script>

<svg 
    xmlns="http://www.w3.org/2000/svg" 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    stroke-width="2" 
    stroke-linecap="round" 
    stroke-linejoin="round"
>
    <!-- Bulb outline -->
    <path d="M9 21h6"/>
    <path d="M12 3c-2.5 0-4.5 2-4.5 4.5 0 1.58.8 2.98 2 3.82V16h5v-4.68c1.2-.84 2-2.24 2-3.82C16.5 5 14.5 3 12 3z"/>
    <path d="M9 17h6"/>
    
    <!-- Light indicator - changes based on selected state -->
    {#if isSelected}
        <!-- Bright light when on -->
        <circle cx="12" cy="7.5" r="2.5" fill="currentColor" opacity="0.9"/>
        <circle cx="12" cy="7.5" r="1.5" fill="white" opacity="0.6"/>
    {:else}
        <!-- Dim light when off -->
        <circle cx="12" cy="7.5" r="2" fill="none" stroke="currentColor" stroke-width="1" opacity="0.3"/>
    {/if}
</svg>
