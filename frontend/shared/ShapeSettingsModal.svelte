<!-- ShapeSettingsModal.svelte -->
<script lang="ts">
	import { createEventDispatcher } from "svelte";

	export let opacity: number = 0.5;
	export let strokeWidth: number = 2;
	export let selectedStrokeWidth: number = 4;
	export let visible: boolean = false;

	const dispatch = createEventDispatcher<{
		change: { 
			opacity: number; 
			strokeWidth: number; 
			selectedStrokeWidth: number; 
		};
		close: undefined;
	}>();

	let tempOpacity = opacity;
	let tempStrokeWidth = strokeWidth;
	let tempSelectedStrokeWidth = selectedStrokeWidth;

	$: if (visible) {
		tempOpacity = opacity;
		tempStrokeWidth = strokeWidth;
		tempSelectedStrokeWidth = selectedStrokeWidth;
	}

	function handleSettingsChange() {
		dispatch("change", { 
			opacity: tempOpacity,
			strokeWidth: tempStrokeWidth,
			selectedStrokeWidth: tempSelectedStrokeWidth
		});
	}

	function handleClose() {
		dispatch("close");
	}

	function handleKeydown(event: KeyboardEvent) {
		if (event.key === "Escape") {
			handleClose();
		} else if (event.key === "Enter") {
			handleSettingsChange();
			handleClose();
		}
	}

	function handleBackdropClick(event: MouseEvent) {
		if (event.target === event.currentTarget) {
			handleClose();
		}
	}
</script>

{#if visible}
	<!-- svelte-ignore a11y-no-static-element-interactions -->
	<div 
		class="annotator-shape-modal-backdrop" 
		on:click={handleBackdropClick}
		on:keydown={handleKeydown}
		role="dialog"
		aria-modal="true"
		aria-labelledby="shape-settings-title"
	>
		<div class="annotator-shape-modal-content">
			<div class="annotator-shape-modal-header">
				<h3 id="shape-settings-title">Shape Settings</h3>
				<button class="close-button" on:click={handleClose} aria-label="Close">×</button>
			</div>
			
			<div class="annotator-shape-modal-body">
				<div class="setting-group">
					<label for="shape-opacity">Opacity:</label>
					<div class="slider-controls">
						<input
							id="shape-opacity"
							type="range"
							min="0"
							max="1"
							step="0.05"
							bind:value={tempOpacity}
							on:input={handleSettingsChange}
							class="settings-slider"
						/>
						<input
							type="number"
							min="0"
							max="1"
							step="0.05"
							bind:value={tempOpacity}
							on:input={handleSettingsChange}
							class="settings-input"
						/>
					</div>
					<div class="preview-container">
						<div 
							class="opacity-preview" 
							style="opacity: {tempOpacity};"
						></div>
						<span class="setting-label">{Math.round(tempOpacity * 100)}%</span>
					</div>
				</div>

				<div class="setting-group">
					<label for="stroke-width">Border Width:</label>
					<div class="slider-controls">
						<input
							id="stroke-width"
							type="range"
							min="1"
							max="10"
							bind:value={tempStrokeWidth}
							on:input={handleSettingsChange}
							class="settings-slider"
						/>
						<input
							type="number"
							min="1"
							max="10"
							bind:value={tempStrokeWidth}
							on:input={handleSettingsChange}
							class="settings-input"
						/>
					</div>
					<div class="preview-container">
						<div 
							class="stroke-preview" 
							style="border-width: {Math.min(tempStrokeWidth, 5)}px;"
						></div>
						<span class="setting-label">{tempStrokeWidth}px</span>
					</div>
				</div>

				<div class="setting-group">
					<label for="selected-stroke-width">Selected Border Width:</label>
					<div class="slider-controls">
						<input
							id="selected-stroke-width"
							type="range"
							min="1"
							max="15"
							bind:value={tempSelectedStrokeWidth}
							on:input={handleSettingsChange}
							class="settings-slider"
						/>
						<input
							type="number"
							min="1"
							max="15"
							bind:value={tempSelectedStrokeWidth}
							on:input={handleSettingsChange}
							class="settings-input"
						/>
					</div>
					<div class="preview-container">
						<div 
							class="stroke-preview selected" 
							style="border-width: {Math.min(tempSelectedStrokeWidth, 5)}px;"
						></div>
						<span class="setting-label">{tempSelectedStrokeWidth}px</span>
					</div>
				</div>
			</div>

			<div class="annotator-shape-modal-footer">
				<button class="button secondary" on:click={handleClose}>Cancel</button>
				<button class="button primary" on:click={() => { handleSettingsChange(); handleClose(); }}>Apply</button>
			</div>
		</div>
	</div>
{/if}

<style>
	.annotator-shape-modal-backdrop {
		position: fixed;
		top: 0;
		left: 0;
		width: 100%;
		height: 100%;
		background-color: rgba(0, 0, 0, 0.5);
		display: flex;
		justify-content: center;
		align-items: center;
		z-index: 1000;
	}

	.annotator-shape-modal-content {
		background: var(--background-fill-primary);
		border: 1px solid var(--border-color-primary);
		border-radius: var(--radius-lg);
		box-shadow: var(--shadow-drop-lg);
		min-width: 350px;
		max-width: 450px;
		max-height: 80vh;
		overflow: hidden;
		animation: modalSlideIn 0.2s ease-out;
	}

	@keyframes modalSlideIn {
		from {
			opacity: 0;
			transform: scale(0.9) translateY(-20px);
		}
		to {
			opacity: 1;
			transform: scale(1) translateY(0);
		}
	}

	.annotator-shape-modal-header {
		padding: var(--spacing-lg);
		border-bottom: 1px solid var(--border-color-primary);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	.annotator-shape-modal-header h3 {
		margin: 0;
		font-size: var(--text-lg);
		font-weight: var(--weight-semibold);
		color: var(--body-text-color);
	}

	.close-button {
		background: none;
		border: none;
		font-size: 24px;
		cursor: pointer;
		color: var(--body-text-color-subdued);
		padding: 0;
		width: 24px;
		height: 24px;
		display: flex;
		align-items: center;
		justify-content: center;
		border-radius: var(--radius-sm);
	}

	.close-button:hover {
		background-color: var(--background-fill-secondary);
		color: var(--body-text-color);
	}

	.annotator-shape-modal-body {
		padding: var(--spacing-lg);
		max-height: 60vh;
		overflow-y: auto;
	}

	.setting-group {
		display: flex;
		flex-direction: column;
		gap: var(--spacing-md);
		margin-bottom: var(--spacing-lg);
	}

	.setting-group:last-child {
		margin-bottom: 0;
	}

	.setting-group label {
		font-weight: var(--weight-semibold);
		color: var(--body-text-color);
		font-size: var(--text-sm);
	}

	.slider-controls {
		display: flex;
		gap: var(--spacing-md);
		align-items: center;
	}

	.settings-slider {
		flex: 1;
		height: 6px;
		background: var(--slider-color);
		border-radius: var(--radius-sm);
		outline: none;
		appearance: none;
		-webkit-appearance: none;
	}

	.settings-slider::-webkit-slider-thumb {
		appearance: none;
		-webkit-appearance: none;
		width: 18px;
		height: 18px;
		background: var(--color-accent);
		border-radius: 50%;
		cursor: pointer;
		border: 2px solid var(--background-fill-primary);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.settings-slider::-moz-range-thumb {
		width: 18px;
		height: 18px;
		background: var(--color-accent);
		border-radius: 50%;
		cursor: pointer;
		border: 2px solid var(--background-fill-primary);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.settings-input {
		width: 70px;
		padding: var(--spacing-sm);
		border: 1px solid var(--border-color-primary);
		border-radius: var(--radius-sm);
		background: var(--input-background-fill);
		color: var(--body-text-color);
		text-align: center;
	}

	.settings-input:focus {
		outline: none;
		border-color: var(--color-accent);
		box-shadow: 0 0 0 2px var(--color-accent-soft);
	}

	.preview-container {
		display: flex;
		align-items: center;
		gap: var(--spacing-md);
		padding: var(--spacing-md);
		background: var(--background-fill-secondary);
		border-radius: var(--radius-sm);
		justify-content: center;
	}

	.opacity-preview {
		width: 30px;
		height: 30px;
		background: var(--color-accent);
		border-radius: var(--radius-sm);
		border: 1px solid var(--border-color-primary);
	}

	.stroke-preview {
		width: 30px;
		height: 30px;
		background: transparent;
		border: solid var(--color-accent);
		border-radius: var(--radius-sm);
	}

	.stroke-preview.selected {
		border-color: var(--color-orange);
	}

	.setting-label {
		font-size: var(--text-sm);
		color: var(--body-text-color-subdued);
		font-weight: var(--weight-medium);
		min-width: 40px;
	}

	.annotator-shape-modal-footer {
		padding: var(--spacing-lg);
		border-top: 1px solid var(--border-color-primary);
		display: flex;
		gap: var(--spacing-md);
		justify-content: flex-end;
	}

	.button {
		padding: var(--spacing-sm) var(--spacing-lg);
		border-radius: var(--radius-sm);
		font-size: var(--text-sm);
		font-weight: var(--weight-medium);
		cursor: pointer;
		border: 1px solid transparent;
		transition: all 0.15s ease;
	}

	.button.primary {
		background: var(--color-accent);
		color: white;
		border-color: var(--color-accent);
	}

	.button.primary:hover {
		background: var(--color-accent-hover, var(--color-accent));
		transform: translateY(-1px);
		box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	}

	.button.secondary {
		background: var(--background-fill-secondary);
		color: var(--body-text-color);
		border-color: var(--border-color-primary);
	}

	.button.secondary:hover {
		background: var(--background-fill-secondary-hover, var(--background-fill-secondary));
		border-color: var(--border-color-accent);
	}
</style>
