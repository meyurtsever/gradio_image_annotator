<script lang="ts">
	import { BaseColorPicker } from "@gradio/colorpicker";
    import { BaseButton } from "@gradio/button";
    import { BaseDropdown } from "./patched_dropdown/Index.svelte";
	import { createEventDispatcher } from "svelte";
    import { onMount, onDestroy } from "svelte";
    import { Lock, Unlock } from "./icons/index";    export let label = "";
    export let currentLabel = "";
    export let choices = [];  // [(label, i)]
    export let choicesColors = [];
    export let color = "";
    export let currentColor = "";
    export let opacity = 0.5;
    export let currentOpacity = 0.5;
    export let showRemove = true;
    export let labelDetailLock = false;
    export let showOpacity = false; // New prop to control opacity visibility
      const dispatch = createEventDispatcher<{
		change: object;
	}>();    // Reactive statements to keep current values in sync with props
    $: currentLabel = label || "";
    $: currentColor = color || "";
    $: currentOpacity = opacity || 0.5;    function dispatchChange(ret: number) {
        dispatch("change", {
            label: currentLabel,
            color: currentColor,
            opacity: currentOpacity,
            lock: labelDetailLock,
            ret: ret // -1: remove, 0: cancel, 1: change
        });
    }function onDropDownChange(event) {
        const { detail } = event;
		let choice = detail;

        if (Number.isInteger(choice)) {
            if (Array.isArray(choicesColors) && choice < choicesColors.length) {
                currentColor = choicesColors[choice];
            }
            if (Array.isArray(choices) && choice < choices.length) {
                currentLabel = choices[choice][0];
            }
        } else {
            currentLabel = choice;
        }
    }    function onColorChange(event) {
        const { detail } = event;
		currentColor = detail;
    }

    function onOpacityChange(event) {
        currentOpacity = parseFloat(event.target.value);
    }

    function onDropDownEnter(event) {
        onDropDownChange(event);
        dispatchChange(1);
    }

    function onLockClick(event) {
        labelDetailLock = !labelDetailLock;
    }

    function handleKeyPress(event: KeyboardEvent) {
		switch (event.key) {
			case "Enter":
                dispatchChange(1);
				break;
		}
	}	onMount(() => {
		document.addEventListener("keydown", handleKeyPress);        // Set initial values from props, with fallbacks to first choice if available
        currentLabel = label || (choices.length > 0 ? choices[0][0] : "");
        currentColor = color || (choicesColors.length > 0 ? choicesColors[0] : "");
        currentOpacity = opacity || 0.5;
	});
    
	onDestroy(() => {
        document.removeEventListener("keydown", handleKeyPress);
  	});

</script>

<div class="annotator-modal" id="model-box-edit">
    <div class="annotator-modal-container">
        <span class="model-content">
            {#if !showRemove}
            <div style="margin-right: 8px;">
                <button
                class="icon"
                class:selected={labelDetailLock === true}
                aria-label="Lock label detail"
                on:click={onLockClick}>
                {#if labelDetailLock}<Lock/>{:else}<Unlock/>{/if}</button
                >
            </div>
            {/if}
            <div style="margin-right: 10px;">
                <BaseDropdown
                    value={currentLabel}
                    label="Label"
                    {choices}
                    show_label={false}
                    allow_custom_value={true}
                    on:change={onDropDownChange}
                    on:enter={onDropDownEnter}
                />
            </div>            <div style="margin-right: 40px; margin-bottom: 8px;">
                <BaseColorPicker
                    value={currentColor}
                    label="Color"
                    show_label={false}
                    on:change={onColorChange}
                />
            </div>
            {#if showOpacity}
            <div style="margin-right: 20px; margin-bottom: 8px; display: flex; flex-direction: column; align-items: center; min-width: 120px;">
                <label for="opacity-slider" style="font-size: 12px; margin-bottom: 4px; color: var(--body-text-color);">Opacity</label>
                <div style="display: flex; align-items: center; gap: 8px; width: 100%;">
                    <input
                        id="opacity-slider"
                        type="range"
                        min="0"
                        max="1"
                        step="0.05"
                        bind:value={currentOpacity}
                        on:input={onOpacityChange}
                        style="flex: 1; height: 4px; background: var(--slider-color); border-radius: 2px; outline: none; appearance: none; -webkit-appearance: none;"
                    />
                    <span style="font-size: 11px; color: var(--body-text-color-subdued); min-width: 30px; text-align: center;">
                        {Math.round(currentOpacity * 100)}%
                    </span>
                </div>
            </div>
            {/if}
            <div style="margin-right: 8px;">
                <BaseButton
                on:click={() => dispatchChange(0)}
                >Cancel</BaseButton>
            </div>
            {#if showRemove}
                <div style="margin-right: 8px;">
                    <BaseButton
                        variant="stop"
                        on:click={() => dispatchChange(-1)}
                    >Remove</BaseButton>
                </div>
            {/if}
            <div>
                <BaseButton
                    variant="primary"
                    on:click={() => dispatchChange(1)}
                >OK</BaseButton>
            </div>
        </span>
    </div>
</div>

<style>
    .annotator-modal {
        position: fixed;
        left: 0;
        top: 0;
        width: 100%;
        height: 100%;
        z-index: var(--layer-top);
        -webkit-backdrop-filter: blur(4px);
        backdrop-filter: blur(4px);
    }

    .annotator-modal-container {
        border-style: solid;
        border-width: var(--block-border-width);
        border-color: var(--block-border-color);
        margin-top: 10%;
        padding: 20px;
        box-shadow: var(--block-shadow);
        border-color: var(--block-border-color);
        border-radius: var(--block-radius);
        background: var(--block-background-fill);
        position: fixed;
        left: 50%;
        transform: translateX(-50%);
        width: fit-content;
    }

    .model-content {
        display: flex;
        align-items: flex-end;
    }

    .icon {
		width: 22px;
		height: 22px;
		margin: var(--spacing-lg) var(--spacing-xs);
		padding: var(--spacing-xs);
		color: var(--neutral-400);
		border-radius: var(--radius-md);
	}

    .icon:hover{
		color: var(--color-accent);
	}

    .selected {
		color: var(--color-accent);
	}
</style>
